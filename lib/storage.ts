import fs from 'fs'
import path from 'path'

// Base directories
const DATA_DIR = path.join(process.cwd(), 'data')
const UPLOADS_DIR = path.join(process.cwd(), 'uploads', 'resumes')

// Ensure directories exist
function ensureDirectories() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  
  // Create subdirectories for each form type
  const formTypes = ['contact', 'apply', 'chat']
  formTypes.forEach(type => {
    const typeDir = path.join(DATA_DIR, type)
    if (!fs.existsSync(typeDir)) {
      fs.mkdirSync(typeDir, { recursive: true })
    }
  })
  
  // Create uploads directory
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true })
  }
}

// Get file path for JSON storage (organized by date)
function getDataFilePath(formType: string): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  
  const dateDir = path.join(DATA_DIR, formType, `${year}-${month}`)
  if (!fs.existsSync(dateDir)) {
    fs.mkdirSync(dateDir, { recursive: true })
  }
  
  return path.join(dateDir, `${year}-${month}-${day}.json`)
}

// Save form data to JSON file
export function saveFormData(formType: 'contact' | 'apply' | 'chat', data: any): { success: boolean; filePath?: string; error?: string } {
  try {
    ensureDirectories()
    
    const filePath = getDataFilePath(formType)
    const timestamp = new Date().toISOString()
    
    // Prepare data with metadata
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      formType,
      data: { ...data },
    }
    
    // Read existing data or create new array
    let existingData: any[] = []
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        existingData = JSON.parse(fileContent)
      } catch (error) {
        console.error('Error reading existing data file:', error)
        existingData = []
      }
    }
    
    // Add new entry
    existingData.push(entry)
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf-8')
    
    return { success: true, filePath }
  } catch (error) {
    console.error('Error saving form data:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Save PDF file
export function saveResumeFile(fileName: string, fileContent: Buffer): { success: boolean; filePath?: string; error?: string } {
  try {
    ensureDirectories()
    
    // Sanitize filename
    const sanitizedFileName = fileName
      .replace(/[^a-zA-Z0-9.-]/g, '_')
      .replace(/\s+/g, '_')
    
    // Add timestamp to avoid conflicts
    const timestamp = Date.now()
    const finalFileName = `${timestamp}_${sanitizedFileName}`
    const filePath = path.join(UPLOADS_DIR, finalFileName)
    
    // Write file
    fs.writeFileSync(filePath, fileContent)
    
    return { success: true, filePath: finalFileName }
  } catch (error) {
    console.error('Error saving resume file:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Get all form data (for reports)
export function getAllFormData(formType?: 'contact' | 'apply' | 'chat'): any[] {
  try {
    ensureDirectories()
    
    const types = formType ? [formType] : ['contact', 'apply', 'chat']
    const allData: any[] = []
    
    types.forEach(type => {
      const typeDir = path.join(DATA_DIR, type)
      if (!fs.existsSync(typeDir)) return
      
      // Read all JSON files recursively
      function readDirectory(dir: string) {
        const files = fs.readdirSync(dir, { withFileTypes: true })
        
        files.forEach(file => {
          const filePath = path.join(dir, file.name)
          
          if (file.isDirectory()) {
            readDirectory(filePath)
          } else if (file.isFile() && file.name.endsWith('.json')) {
            try {
              const content = fs.readFileSync(filePath, 'utf-8')
              const data = JSON.parse(content)
              if (Array.isArray(data)) {
                allData.push(...data)
              }
            } catch (error) {
              console.error(`Error reading file ${filePath}:`, error)
            }
          }
        })
      }
      
      readDirectory(typeDir)
    })
    
    // Sort by timestamp (newest first)
    return allData.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
  } catch (error) {
    console.error('Error reading form data:', error)
    return []
  }
}

// Get resume file path
export function getResumeFilePath(fileName: string): string {
  return path.join(UPLOADS_DIR, fileName)
}

// Get storage statistics
export function getStorageStats(): {
  contact: number
  apply: number
  chat: number
  total: number
  resumes: number
} {
  try {
    ensureDirectories()
    
    const stats = {
      contact: 0,
      apply: 0,
      chat: 0,
      total: 0,
      resumes: 0,
    }
    
    // Count form submissions
    const types: ('contact' | 'apply' | 'chat')[] = ['contact', 'apply', 'chat']
    types.forEach(type => {
      const typeDir = path.join(DATA_DIR, type)
      if (!fs.existsSync(typeDir)) return
      
      function countFiles(dir: string) {
        const files = fs.readdirSync(dir, { withFileTypes: true })
        
        files.forEach(file => {
          const filePath = path.join(dir, file.name)
          
          if (file.isDirectory()) {
            countFiles(filePath)
          } else if (file.isFile() && file.name.endsWith('.json')) {
            try {
              const content = fs.readFileSync(filePath, 'utf-8')
              const data = JSON.parse(content)
              if (Array.isArray(data)) {
                stats[type] += data.length
                stats.total += data.length
              }
            } catch (error) {
              console.error(`Error reading file ${filePath}:`, error)
            }
          }
        })
      }
      
      countFiles(typeDir)
    })
    
    // Count resume files
    if (fs.existsSync(UPLOADS_DIR)) {
      const resumeFiles = fs.readdirSync(UPLOADS_DIR).filter(file => 
        file.toLowerCase().endsWith('.pdf')
      )
      stats.resumes = resumeFiles.length
    }
    
    return stats
  } catch (error) {
    console.error('Error getting storage stats:', error)
    return {
      contact: 0,
      apply: 0,
      chat: 0,
      total: 0,
      resumes: 0,
    }
  }
}



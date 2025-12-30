import { NextRequest, NextResponse } from 'next/server'
import { getAllFormData, getStorageStats } from '@/lib/storage'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const formType = searchParams.get('type') as 'contact' | 'apply' | 'chat' | null
    const format = searchParams.get('format') || 'json'
    
    if (format === 'stats') {
      // Return statistics only
      const stats = getStorageStats()
      return NextResponse.json({ success: true, stats })
    }
    
    // Get all form data
    const data = getAllFormData(formType || undefined)
    
    if (format === 'csv') {
      // Convert to CSV format
      if (data.length === 0) {
        return NextResponse.json({ success: true, csv: '', message: 'No data available' })
      }
      
      // Get all unique keys from all entries
      const allKeys = new Set<string>()
      data.forEach(entry => {
        Object.keys(entry.data || {}).forEach(key => allKeys.add(key))
        Object.keys(entry).forEach(key => allKeys.add(key))
      })
      
      const headers = Array.from(allKeys).filter(key => key !== 'data')
      const csvHeaders = ['ID', 'Timestamp', 'Date', 'Form Type', ...headers]
      
      const csvRows = data.map(entry => {
        const row = [
          entry.id || '',
          entry.timestamp || '',
          entry.date || '',
          entry.formType || '',
          ...headers.map(key => {
            const value = entry.data?.[key] || entry[key] || ''
            // Escape commas and quotes in CSV
            if (typeof value === 'string') {
              return `"${value.replace(/"/g, '""')}"`
            }
            return `"${String(value)}"`
          })
        ]
        return row.join(',')
      })
      
      const csv = [csvHeaders.join(','), ...csvRows].join('\n')
      
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="vanguard-kids-report-${new Date().toISOString().split('T')[0]}.csv"`,
        },
      })
    }
    
    // Return JSON format
    return NextResponse.json({
      success: true,
      count: data.length,
      data,
    })
  } catch (error) {
    console.error('Error in reports API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}



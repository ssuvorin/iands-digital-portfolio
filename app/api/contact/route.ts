import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, company, service, budget, message } = body

    // Валидация
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!databaseId) {
      return NextResponse.json(
        { error: 'Notion database ID is not set' },
        { status: 500 }
      )
    }

    // Сохраняем заявку в Notion
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Phone: { phone_number: phone },
        Company: { rich_text: [{ text: { content: company || '' } }] },
        Service: { rich_text: [{ text: { content: service || '' } }] },
        Budget: { rich_text: [{ text: { content: budget || '' } }] },
        Message: { rich_text: [{ text: { content: message } }] },
        Submitted: { date: { start: new Date().toISOString() } },
      },
    })

    return NextResponse.json(
      { message: 'Message saved to Notion successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to save message to Notion', details: error?.body || error?.message || String(error) },
      { status: 500 }
    )
  }
} 
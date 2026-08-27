import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'
import { hash, compare } from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { email, password, full_name } = await request.json()

    // Validation
    if (!email || !password || !full_name) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password minimal 6 karakter' },
        { status: 400 }
      )
    }

    // Check email sudah ada
    const { data: existingUser } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email sudah terdaftar' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Insert user
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          email,
          full_name,
          password: hashedPassword,
        },
      ])
      .select()
      .single()

    if (error || !data) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Gagal membuat akun' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Akun berhasil dibuat',
        user: {
          id: data.id,
          email: data.email,
          full_name: data.full_name,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'
import { compare } from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email dan password harus diisi' },
        { status: 400 }
      )
    }

    // Query user dari database
    const { data, error: queryError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (queryError || !data) {
      return NextResponse.json(
        { error: 'Email atau password salah' },
        { status: 401 }
      )
    }

    // Compare password dengan hash
    const passwordMatch = await compare(password, data.password)

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Email atau password salah' },
        { status: 401 }
      )
    }

    // Success - return user data
    return NextResponse.json(
      {
        message: 'Login berhasil',
        user: {
          id: data.id,
          email: data.email,
          full_name: data.full_name,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

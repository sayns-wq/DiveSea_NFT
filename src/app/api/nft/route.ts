import { NFT_Cards } from '@/data/data'
import { NextResponse } from 'next/server'
export async function GET(request: Request) {
 
  return NextResponse.json(NFT_Cards)
  }
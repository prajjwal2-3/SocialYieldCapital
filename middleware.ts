import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers'
import axios from 'axios';

export async function middleware(request: NextRequest) {

//     const isProduction = process.env.NODE_ENV === 'production'
//     console.log(isProduction)
//     const allCookies = cookies().get('access_token_from_s')
//     if(!allCookies){
//         return NextResponse.redirect(`${isProduction?'http://social-yield-capital.vercel.app/signup':'http://localhost:3000/signup'}`)
//     }
//   console.log(allCookies) 
  console.log('middleware hello')

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/view/:path*'], 
};

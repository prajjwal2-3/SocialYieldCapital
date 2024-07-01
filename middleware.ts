import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';

export async function middleware(request: NextRequest) {
    try {
       
        console.log('from middleware')
       

    } catch (error) {
        console.error('Error in middleware:', error);
        
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/view/:path*'], 
};

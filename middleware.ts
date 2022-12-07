import { NextResponse, NextRequest } from 'next/server';
import {
    ALTCOIN_PRIVATE_ROUTES,
    ALTCOIN_ROUTES,
} from '@/common/constants/routes.const';

export function middleware(request: NextRequest): NextResponse {
    const pathname = request.nextUrl.pathname;
    const isPrivateRoute = Object.values(ALTCOIN_PRIVATE_ROUTES).includes(
        pathname
    );

    if (isPrivateRoute) {
        // check wallet connect?
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|favicon.ico).*)', '/'],
};

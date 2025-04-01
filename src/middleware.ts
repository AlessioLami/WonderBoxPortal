import {NextRequest, NextResponse} from "next/server";

const protectedRoutes = ["/"]
const publicRoutes = ["/login"]

const middleware = async (request: NextRequest) => {

	const path = request.nextUrl.pathname

	const isProtectedRoute = protectedRoutes.includes(path) 
	const isPublicRoute = protectedRoutes.includes(path)





	return NextResponse.next()
}


export default middleware

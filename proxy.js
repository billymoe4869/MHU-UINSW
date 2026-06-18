import { auth } from "@/auth";

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");

    if (isOnDashboard && !isLoggedIn) {
        return Response.redirect(new URL("/login", req.nextUrl))
    }
    return
})


export const config = {
    matcher: ["/dashboard/:path*"]
}



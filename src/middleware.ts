import createMiddleware from "next-intl/middleware";
import { defineRouting } from "next-intl/routing";
import { NextRequest } from "next/server";

const routing = defineRouting({
  locales: ["ko", "en"],

  defaultLocale: "ko",

  localePrefix: "always"
});

export default function middleware(request: NextRequest) {
  request.cookies.delete("NEXT_LOCALE");

  // next-intl 미들웨어 실행 (브라우저 언어 감지)
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  // 응답에서도 NEXT_LOCALE 쿠키 설정을 제거 (쿠키가 저장되지 않도록)
  response.cookies.delete("NEXT_LOCALE");

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};

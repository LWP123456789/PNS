package Servlet;

import cn.hutool.core.util.RandomUtil;
import cn.hutool.extra.mail.MailUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class Login extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 设置响应内容类型,设置编码，否则显示的全是问号
        response.setContentType("text/html;charset=utf-8");
        String email = (String) request.getParameter("email");
        String title = "登录验证";
        //随机产生验证码
        int code = RandomUtil.randomInt(10000,99999);
        //拼接发送内容
        String content = "您的验证码是 "+ code + ", 请在五分钟内完成验证。";
        //发送验证码
        MailUtil.send(email, title, content, false);
    }
}

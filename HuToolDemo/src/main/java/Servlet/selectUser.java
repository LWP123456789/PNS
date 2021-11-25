package Servlet;

import cn.hutool.db.Db;
import cn.hutool.db.Entity;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

@WebServlet(name = "selectUser", value = "/selectUser")
public class selectUser extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 设置响应内容类型,设置编码，否则显示的全是问号
        response.setContentType("text/html;charset=utf-8");
        List<Entity> result = null;
        try {
            result = Db.use().findAll("user");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        //System.out.println(result);
        PrintWriter out = response.getWriter();
        out.printf("用户ID    用户名    密码    注册时间<br/>");
        for (Entity entity1 : result) {
            //System.out.println(entity1.toString());
            out.printf("%s    %s    %s    %s", entity1.get("id"), entity1.get("username"), entity1.get("password"),entity1.get("registerTime"));
            out.println("<br/>");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 设置响应内容类型,设置编码，否则显示的全是问号
        response.setContentType("text/html;charset=utf-8");
        List<Entity> result = null;
        try {
            result = Db.use().findAll("user");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        //System.out.println(result);
        PrintWriter out = response.getWriter();
        out.printf("用户ID    用户名    密码    注册时间<br/>");
        for (Entity entity1 : result) {
            //System.out.println(entity1.toString());
            out.printf("%s    %s    %s    %s", entity1.get("id"), entity1.get("username"), entity1.get("password"),entity1.get("registerTime"));
            out.println("<br/>");
        }
    }
}

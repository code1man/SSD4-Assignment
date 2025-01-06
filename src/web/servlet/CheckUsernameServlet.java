package web.servlet;

import service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/checkUsername")
public class CheckUsernameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        if (username == null || username.trim().isEmpty()) {
            resp.getWriter().write("{\"error\": \"用户名不能为空！\"}");
        } else {
            UserService userService = new UserService();

            try {
                if (userService.UserExists(username)) {
                    resp.getWriter().write("{\"error\": \"用户名已存在！\"}");
                } else {
                    resp.getWriter().write("{\"error\": \"\"}");  // 没有错误
                }
            } catch (SQLException e) {
                e.printStackTrace();
                resp.getWriter().write("{\"error\": \"服务器内部错误！\"}");
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}

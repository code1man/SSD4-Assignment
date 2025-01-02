package web.servlet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@WebServlet(name = "MyServlet", urlPatterns = "/MyServlet")
public class MyServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 获取 action 参数
        String action = request.getParameter("action");

        if ("page1".equals(action)) {
            // 跳转到 /WEB-INF/page1.jsp
            request.getRequestDispatcher("/WEB-INF/jsp/comment.jsp").forward(request, response);
        } else if ("page2".equals(action)) {
            // 跳转到 /WEB-INF/page2.jsp
            request.getRequestDispatcher("/WEB-INF/jsp/agree.jsp").forward(request, response);
        }
        else if ("page3".equals(action)) {
            // 跳转到 /WEB-INF/page2.jsp
            request.getRequestDispatcher("/WEB-INF/jsp/subscribe.jsp").forward(request, response);
        }else {
            // 默认处理：显示 404 页面
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doGet(request,response);
    }
}
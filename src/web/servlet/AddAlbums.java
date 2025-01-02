package web.servlet;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Map;

@WebServlet(name = "AddAlbums", urlPatterns = {"/createAlbum"})
public class AddAlbums extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        HttpSession session = req.getSession();
        Object albumNumObj = session.getAttribute("albumNum");
        int albumNumInt = (albumNumObj == null) ? 0 : Integer.parseInt(albumNumObj.toString());
        albumNumInt += 1;

        session.setAttribute("albumNum", albumNumInt);

        // JSON 响应
        Gson gson = new Gson();
        String jsonResponse = gson.toJson(Map.of("albumNum", albumNumInt));
        resp.getWriter().write(jsonResponse);
    }
}

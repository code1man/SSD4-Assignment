package web.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name="EditInformation", urlPatterns={"/editInformation"})
@MultipartConfig(   fileSizeThreshold = 1024 * 1024 * 2, // 2MB
        maxFileSize = 1024 * 1024 * 10,      // 10MB
        maxRequestSize = 1024 * 1024 * 50   // 50MB
 )
public class EditInformation extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json");

        String username = null;
        String bio = null;
        String gender = null;
        String avatarPath = null;

        // 获取文件上传路径
        String uploadPath = getServletContext().getRealPath("/uploads");
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) uploadDir.mkdir();

        try {
            for (Part part : req.getParts()) {
                String fieldName = part.getName();

                if ("username".equals(fieldName)) {
                    username = req.getParameter("username");
                } else if ("bio".equals(fieldName)) {
                    bio = req.getParameter("bio");
                } else if ("gender".equals(fieldName)) {
                    gender = req.getParameter("gender");
                } else if ("avatar".equals(fieldName) && part.getSize() > 0) {
                    // 处理文件上传
                    String fileName = extractFileName(part);
                    String filePath = uploadPath + File.separator + fileName;
                    part.write(filePath);
                    avatarPath = "/uploads/" + fileName; // 保存相对路径
                }
            }

            HttpSession session = req.getSession();
            if (username != null) session.setAttribute("username", username);
            if (bio != null) session.setAttribute("bio", bio);
            if (gender != null) session.setAttribute("gender", gender);
            if (avatarPath != null) session.setAttribute("avatar", avatarPath);

            try (PrintWriter out = resp.getWriter()) {
                out.write("{\"updateUsername\":\"" + (username != null ? username : "") + "\",");
                out.write("\"updateBio\":\"" + (bio != null ? bio : "") + "\",");
                out.write("\"updateGender\":\"" + (gender != null ? gender : "") + "\",");
                out.write("\"updateAvatar\":\"" + (avatarPath != null ? avatarPath : "") + "\"}");
            }

        } catch (Exception ex) {
            resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error processing file upload.");
            ex.printStackTrace();
        }
    }

    private String extractFileName(Part part) {
        // 获取文件名
        String contentDisp = part.getHeader("content-disposition");
        for (String content : contentDisp.split(";")) {
            if (content.trim().startsWith("filename")) {
                return content.substring(content.indexOf("=") + 2, content.length() - 1);
            }
        }
        return null;
    }
}
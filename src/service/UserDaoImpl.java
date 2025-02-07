package service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import domain.User;
import persistence.DBUtil;

public class UserDaoImpl implements UserDao {
    private static String SELECT_USER_BY_USERNAME = "SELECT * FROM userinfo WHERE username =?";

    @Override
    public User findByUsername(String username) throws SQLException {
        User user = null;
        Connection conn = DBUtil.getConnection();
        PreparedStatement pstmt = conn.prepareStatement(SELECT_USER_BY_USERNAME);
        pstmt.setString(1, username);
        ResultSet rs = pstmt.executeQuery();
        if (rs.next()) {
         user = new User();
         user.setUsername(rs.getString("username"));
        }

        DBUtil.closeResultSet(rs);
        DBUtil.closePreparedStatement(pstmt);
        DBUtil.closeConnection(conn);
        return user;
    }
}
package service;

import java.sql.SQLException;

public class UserService {
    public boolean UserExists(String username) throws SQLException {
        UserDaoImpl userDao = new UserDaoImpl();
        return userDao.findByUsername(username)!= null;
    }
}
package service;

import domain.User;

import java.sql.SQLException;
import java.util.List;

public interface UserDao {
     public User findByUsername(String username) throws SQLException;

}

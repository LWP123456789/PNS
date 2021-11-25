package test;

import cn.hutool.db.Db;
import cn.hutool.db.Entity;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class HuTo0lDb {
    public static void main(String[] args) throws SQLException {
        List<Entity> result = Db.use().findAll("user");
        //System.out.println(result);
        for (Entity entity1 : result) {
            //System.out.println(entity1.toString());
            System.out.printf("用户ID: %s 用户名：%s 密码：%s 注册时间：%s", entity1.get("id"), entity1.get("username"), entity1.get("password"),entity1.get("registerTime"));
            System.out.println();
        }

    }

}

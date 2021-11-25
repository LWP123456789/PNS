package test;

import cn.hutool.crypto.SecureUtil;

public class md5 {
    public static void main(String[] args) {
        String str = "河南大学";
        //加密
        String henu = SecureUtil.md5(str);
        System.out.println(henu);
    }

}

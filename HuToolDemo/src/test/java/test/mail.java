package test;

import cn.hutool.extra.mail.MailUtil;

public class mail {
    public static void main(String[] args) {
        MailUtil.send("1912020064@henu.edu.cn", "登录到编程导航网站", "你的验证码是 213312 ，请在五分钟内完成验证。", false);
    }

}

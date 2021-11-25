<%--
  Created by IntelliJ IDEA.
  User: wyx
  Date: 2021/11/10
  Time: 23:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>HuTool-db数据库操作</title>
    <script type="text/javascript">
        /*使用Ajax提交请求*/
        function showCustomer() {
            var xhttp;
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState  == 4 && this.status == 200) {
                    document.getElementById("message").innerHTML  = this.responseText;
                }
            };
            xhttp.open("GET", "selectUser", true);
            xhttp.send();
        }
    </script>
</head>
<body>

<button type="button" onclick="showCustomer()">查看用户</button>

<div id="message">

</div>
</body>
</html>

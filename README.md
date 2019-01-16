# cust


```
npm install

npm start
```

**此代码不在维护，仅供参考使用。**
**服务器未到过期时间，线上的接口仍然可以使用**

本地Url: `localhost:3000`


线上baseUrl: `http://140.143.163.52:8888`


<table>
        <tr>
            <th>序号</th>
            <th>接口url</th>
            <th>请求方式</th>
            <th>描述</th>
        </tr>
        <tr>
            <th>1</th>
            <th>/course/getList/1/10</th>
            <th>get</th>
            <th>获取所有课程列表</th>
        </tr>
        <tr>
            <th>2</th>
            <th>/course/getList/1/10?type=python</th>
            <th>get</th>
            <th>获取某个类别下的课程信息，type="all"是等同上个接口</th>
        </tr>
        <tr>
            <th>3</th>
            <th>/course/search/1/10?keyword=web</th>
            <th>get</th>
            <th>根据关键字搜索课程信息</th>
        </tr>
        <tr>
            <th>4</th>
            <th>/course/getLessonList/395</th>
            <th>get</th>
            <th>获取课程详细信息</th>
        </tr>
    </table>


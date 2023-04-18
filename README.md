🌃 Hugo 架构 Stellar 主题 一键模板

### Hugo Stellar 主题地址

<https://github.com/Yharimium/hugo-stellar>

### 如何使用?

1. 点击 `Use this template`，选择 `Create a new repository` 创建新仓库，仓库命名可随意。

    ![image](https://user-images.githubusercontent.com/97100140/221425412-2d5fc6c3-be4e-4434-ab8d-94738ce50da3.png)

2. 进入刚创建的仓库，依次点击 Settings > Pages，将 Branch 设置为 gh-pages

    ![image](https://user-images.githubusercontent.com/97100140/221348938-596c7cec-7f64-49c5-8cbe-f2e6c7681947.png)


3. 自动部署完成后访问 GitHub Pages 给出的网址即可

- 如需绑定域名，请查阅[管理 GitHub Pages 站点的自定义域 - GitHub Docs](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) 
- 更多主题内容请查阅[官方文档](https://github.com/Yharimium/hugo-stellar)

#### 自动更新主题

1. [创建个人访问令牌 - GitHub Docs](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) | 此处只需勾选 workflow

    > **一定要记得复制令牌密钥**

    ![image](https://user-images.githubusercontent.com/97100140/221348264-c2edf2a0-2cce-4bc6-9f72-dd6c5cf4a392.png)

2. 回到刚才创建的仓库，依次点击 Settings > Secrets and variables > Actions，添加 repository secret

   ![image](https://user-images.githubusercontent.com/97100140/221348989-4d210885-6b0c-4930-a28d-bf2ce663eb7e.png)
   
   Name 填写 `CI_TOKEN`，Secret 填写刚刚复制的令牌密钥
   
   ![image](https://user-images.githubusercontent.com/97100140/221348504-19f9134d-74e2-43a4-a6bc-5cc456919da8.png)


#### 在自动更新主题的基础上：如想手动更新如下所示

![image](https://user-images.githubusercontent.com/97100140/221348608-ede160ba-9e22-4fbb-93e6-937c351b44a1.png)

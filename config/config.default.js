/**
 *  默认配置
 * @type
 */
module.exports = {
    keys : 'Ap38dk30sS3l',
    private_key:`-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJ63v6yp7Q6QbReS
+iHBwsMPbw5GRXcndNyEjePxpu0ySX0taLEYh2GMwdw7Jt9yZIRbvxnM8woYLw1f
h9noZh6uBrazFVTrM2NTVTRFzwMz004LwZY2s9umETHrmNEh6J7TFqInFwpXgWYl
yAoO7X3JcyhWi8AUpci8rvWNwhYDAgMBAAECgYA3mshcBWw3ngGaMLPQ/8Dr9YxC
w/uyMvCOESJkqVSB5Qw5/p6e7KkBU/7W2SJVRg5REJNyxoqfDrntRXqirPiZWb9n
4+lRw67HB0Dy9IFdFhuWcPpRjmAjQnhQth2WWDINFtpiK3hzy/ASboUsI39zmoeW
xP3t8/ZFDq2vFnCQAQJBAMu4jFfJlPZF7Me/LZUPsinuvHWsfWR1cdcJXbf3PFte
TAzngvgzND2C3pR/Hf9VWhjoo39amC6NDHXhETxkLYMCQQDHcrf3jvE6UWyqicgD
HmJwMjW//03i/odkwVOYRCP2ytgdsZujnyldNPV51H0ATSImsZLLL9/OJPG9lhQV
Eo2BAkA2FnFsfWDHYhlTjzaS9O/gojn3JCzGl0f6R8pSJZooyAh5BJ6JN08PZcei
tX1JZWfeZSXDklIFSf2c7nydBBvxAkAA6bmF3JWmGrFQpojP2tfAg7pTQqvsmhWs
lGX5kHZJruwGVsXLnfLmhlOJVzurQK8jVjTB0VpI60pf/8vfvNIBAkEAwGbApTtc
sovjwpVptJKTHvuJx+vKbiNanNwXuECZXw2RltReEtEg297ftRdOe0vLtfjPi75y
MMo/LL547X7hbw==
-----END PRIVATE KEY-----
`,
    view: {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks',
        },
    },
    session: {
        renew: true,
        maxAge: 7*24 * 3600 * 1000, // 7 天
    },
    lru : {
        client: {
            // all lru cache config available here
            max: 1000,
            maxAge: 1000 * 60 * 60*24, // 1 天
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false,
    },
    // 配置需要的中间件，数组顺序即为中间件的加载顺序
    middleware: ['closeHandler','saveSession','errorHandler','gzip'],
    io: {
        init: {}, // passed to engine.io
        namespace: {
          '/': {
            connectionMiddleware: ['auth'],
            packetMiddleware: ['filter'],
          },
        },
      },
    email: {
        service: 'QQ',
        user: 'xxxxxxxxx@qq.com',
        pass: 'xxxxxxxxxxxxxxxxx',
    },
    security:{
        csrf: {
          enable: false,
          ignoreJSON: true,
        },
        domainWhiteList: [ '*'],
      },
      cors:{
        origin: '*', // 匹配规则  域名+端口  *则为全匹配
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      },
      sshConfig: {//服务器验证信息
        readyTimeout: 5000,
        algorithms: {
          "kex": [
            "diffie-hellman-group1-sha1",
            "ecdh-sha2-nistp256",
            "ecdh-sha2-nistp384",
            "ecdh-sha2-nistp521",
            "diffie-hellman-group-exchange-sha256",
            "diffie-hellman-group14-sha1"
          ],
          "cipher": [
            "3des-cbc",
            "aes128-cbc",
            "aes192-cbc",
            "aes256-cbc",
            "aes128-ctr",
            "aes192-ctr",
            "aes256-ctr",
            "aes128-gcm@openssh.com",
            "aes256-gcm@openssh.com",
            "arcfour",
            "arcfour128",
            "arcfour256",
            "blowfish-cbc",
            "cast128-cbc",
          ],
          "serverHostKey": [
            "ssh-rsa",
            "ecdsa-sha2-nistp256",
            "ecdsa-sha2-nistp384",
            "ecdsa-sha2-nistp521"
          ],
          "hmac": [
            "hmac-sha2-256",
            "hmac-sha2-512",
            "hmac-sha1"
          ]
        }
      }
};

/* Siddharth Kumar Yadav
20/12/21
*/

package middlewares

import (
	"fmt"
	"net/http"
	"rest-api-sky/utils/token"

	"github.com/gin-gonic/gin"
)

func JwtAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		err := token.TokenValid(c)
		fmt.Println(err)
		if err != nil {
			c.String(http.StatusUnauthorized, "Unauthorized")
			c.Abort()
			return
		}
		c.Next()
	}
}

/* Siddharth Kumar Yadav
20/12/21
*/
package main

import (
	"rest-api-sky/controllers"
	"rest-api-sky/middlewares"
	"rest-api-sky/models"

	"github.com/gin-gonic/gin"
)

func main() {
	models.ConnectDataBase()
	r := gin.Default()
	public := r.Group("/api")

	public.POST("/register", controllers.Register)
	public.POST("/login", controllers.Login)

	protected := r.Group("/api/admin")
	protected.Use(middlewares.JwtAuthMiddleware())
	protected.GET("/user", controllers.CurrentUser)

	r.Run(":4546")
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace StoreAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StoreDetails",
                columns: table => new
                {
                    StoreDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StoreName = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    StoreAddress = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    StoreWorkTime = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    StoreItems = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StoreDetails", x => x.StoreDetailId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StoreDetails");
        }
    }
}

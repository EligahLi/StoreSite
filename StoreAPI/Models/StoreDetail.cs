using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StoreAPI.Models
{
    public class StoreDetail
    {
        [Key]
        public int StoreDetailId { get; set; }


        [Column(TypeName = "nvarchar(20)")]
        public string StoreName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string StoreAddress { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string StoreWorkTime { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string StoreItems { get; set; }
    }
}

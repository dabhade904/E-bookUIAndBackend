﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Common_Layer.Model
{
    public class UserRegisterModel
    {

        public int UserId { get; set; }
        public string FullName { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public long MobileNumber { get; set; }
    }
}
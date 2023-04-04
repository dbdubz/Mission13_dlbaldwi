using System;
using System.Collections.Generic;

namespace backend.Data
{
    public partial class Movie
    {
        public int MovieId { get; set; }
        public string Category { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public int Year { get; set; }
        public string Director { get; set; } = string.Empty;
        public string Rating { get; set; } = string.Empty;
        public string? Edited { get; set; }
        public string? LentTo { get; set; }
        public string? Notes { get; set; }
    }
}

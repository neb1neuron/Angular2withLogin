namespace FleetPortal.UI.Models
{
    public class BranchManager
    {
        public int Id { get; set; }
        public string IdentityId { get; set; }
        public User Identity { get; set; }  // navigation property
        public string Location { get; set; }
    }
}

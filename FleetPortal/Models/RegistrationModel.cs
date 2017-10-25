using FleetPortal.UI.Models.Validations;
using FluentValidation.Attributes;


namespace FleetPortal.UI.Models
{
    [Validator(typeof(RegistrationModelValidator))]
    public class RegistrationModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Location { get; set; }
    }
}

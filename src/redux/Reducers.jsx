const initialState = localStorage.getItem("Blogs")
  ? JSON.parse(localStorage.getItem("Blogs"))
  : [
      {
        id: 1,
        title: "SHOW IN TOKYO",
        image:
          "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1920/FSH-1685773142496-imgfixevideopostshowmashupdesktop.jpg",
        description:
          "After being presented in Dakar last December, the CHANEL 2022/23 Métiers d’art collection made a stop-over in Japan for the replica show in Tokyo on June 1st to celebrate the close ties between CHANEL and Japan.Ambassadors and friends of the House share their impressions on the 2022/23 Métiers dart collection imagined by Virginie Viard. First presented in Dakar last December, the collection made a stop-over in Tokyo.",
      },
      {
        id: 2,
        title:
          "Wednesday, July 5, 2023  AN ODE TO THE PARISIENNE CHANEL FALL-WINTER 2023/24 HAUTE COUTURE SHOW",
        image:
          "https://www.chanel.com/images/f_auto,q_80,c_scale,w_1440/FSH-1685690576562-imgfixevideomoodshowdesktop.jpg",
        description:
          "Paraded along the riverbanks of the Seine in Paris, the CHANEL Fall-Winter 2023/24 Haute Couture collection imagined by Virginie Viard is the portrait of a sensitive yet bold Parisienne. What she wears, what she reads and thinks, and her very attitude to life is reflected in the assembly of tweeds, silk chiffons, organza and inlaid lace, as the composition of floral and graphic motifs testify to the effervescence of a rich and feminine creative universe.",
      },
    ];

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.payload];
    case "REMOVE_BLOG":
      return state.filter((item) => item.id !== action.payload);
      case "EDIT_BLOG":
        const myBlogForEdited = action.payload;
  
        const updatedBlogsArray = state.map((item) => {
          if (item.id === myBlogForEdited.id) {
            return myBlogForEdited;
          } else {
            return item;
          }
        });
  
        return (state = updatedBlogsArray);
  
      case "CLEAR_ALL_BLOG":
        return (state = []);
      default:
      return state;
  }
};

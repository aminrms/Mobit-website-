import PhoneLogo from "../../images/phone.svg";
import LaptopLogo from "../../images/laptopIcon.svg";
import Whatch from "../../images/whatch.svg";
import AudioTv from "../../images/audio-tv.svg";
import ComponyMachine from "../../images/compony-machines.svg";
import Game from "../../images/game.svg";
import PersonalThings from "../../images/personal-things.svg";
const SubMenuData = [
  {
    title: "موبایل و تبلت",
    id: 1,
    logo: PhoneLogo,
    subMenu: [
      {
        Title: "گوشی موبایل",
        path: "/phone/",
        phoneMenu: [
          {
            id: 1,
            subItem: "شیائومی",
          },
          {
            id: 1,
            subItem: "سامسونگ",
          },
          {
            id: 1,

            subItem: "اپل",
          },
          {
            id: 1,

            subItem: "هواوی",
          },
          {
            id: 1,

            subItem: "نوکیا",
          },
          {
            id: 1,
            subItem: "آنر",
          },
          {
            id: 1,
            subItem: "گوشی های ساده",
          },
        ],
      },
      {
        Title: "هدفون،هدست،هندزفری",
      },
      {
        Title: "پاور بانک(شارژ همراه)",
      },
      {
        Title: "لوازم جانبی موبایل",
        phoneMenu: [
          {
            subItem: "9",
          },
          {
            subItem: "7",
          },
          {
            subItem: "5",
          },
          {
            subItem: "5",
          },
          {
            subItem: "2",
          },
          {
            subItem: "77",
          },
          {
            subItem: "گوشی های ساده",
          },
        ],
      },
      {
        Title: " تبلت",
      },
    ],
    path: "/phone",
  },
  // {
  //   title: "لپ تاپ و کامپیوتر",
  //   id: 2,
  //   logo: LaptopLogo,
  //   subMenu: [
  //     {
  //       Title: "گوشی موبایل",
  //       path: "/phone/",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: "هدفون،هدست،هندزفری",
  //     },
  //     {
  //       Title: "پاور بانک(شارژ همراه)",
  //     },
  //     {
  //       Title: "لوازم جانبی موبایل",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: " تبلت",
  //     },
  //   ],
  //   path: "/phone",
  // },
  // {
  //   title: "گجت های هوشمند",
  //   id: 3,
  //   logo: Whatch,
  //   subMenu: [
  //     {
  //       Title: "گوشی موبایل",
  //       path: "/phone/",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: "هدفون،هدست،هندزفری",
  //     },
  //     {
  //       Title: "پاور بانک(شارژ همراه)",
  //     },
  //     {
  //       Title: "لوازم جانبی موبایل",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: " تبلت",
  //     },
  //   ],
  //   path: "/phone",
  // },
  // {
  //   title: "لوازم صوتی تصویری",
  //   id: 4,
  //   logo: AudioTv,
  //   subMenu: [
  //     {
  //       Title: "گوشی موبایل",
  //       path: "/phone/",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: "هدفون،هدست،هندزفری",
  //     },
  //     {
  //       Title: "پاور بانک(شارژ همراه)",
  //     },
  //     {
  //       Title: "لوازم جانبی موبایل",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: " تبلت",
  //     },
  //   ],
  //   path: "/phone",
  // },
  // {
  //   title: "ماشین های اداری",
  //   id: 5,
  //   logo: ComponyMachine,
  //   subMenu: [
  //     {
  //       Title: "گوشی موبایل",
  //       path: "/phone/",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: "هدفون،هدست،هندزفری",
  //     },
  //     {
  //       Title: "پاور بانک(شارژ همراه)",
  //     },
  //     {
  //       Title: "لوازم جانبی موبایل",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: " تبلت",
  //     },
  //   ],
  //   path: "/phone",
  // },
  // {
  //   title: "کنسول بازی",
  //   id: 6,
  //   logo: Game,
  //   subMenu: [
  //     {
  //       Title: "گوشی موبایل",
  //       path: "/phone/",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: "هدفون،هدست،هندزفری",
  //     },
  //     {
  //       Title: "پاور بانک(شارژ همراه)",
  //     },
  //     {
  //       Title: "لوازم جانبی موبایل",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: " تبلت",
  //     },
  //   ],
  //   path: "/phone",
  // },
  // {
  //   title: "لوازم شخصی برقی",
  //   id: 7,
  //   logo: PersonalThings,
  //   subMenu: [
  //     {
  //       Title: "گوشی موبایل",
  //       path: "/phone/",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: "هدفون،هدست،هندزفری",
  //     },
  //     {
  //       Title: "پاور بانک(شارژ همراه)",
  //     },
  //     {
  //       Title: "لوازم جانبی موبایل",
  //       phoneMenu: [
  //         {
  //           subItem: "شیائومی",
  //         },
  //         {
  //           subItem: "سامسونگ",
  //         },
  //         {
  //           subItem: "اپل",
  //         },
  //         {
  //           subItem: "هواوی",
  //         },
  //         {
  //           subItem: "نوکیا",
  //         },
  //         {
  //           subItem: "آنر",
  //         },
  //         {
  //           subItem: "گوشی های ساده",
  //         },
  //       ],
  //     },
  //     {
  //       Title: " تبلت",
  //     },
  //   ],
  //   path: "/phone",
  // },
];
export default SubMenuData;
{
  /* {HeaderData.map((item, index) => {
              return (
                <div className="items" key={index}>
                  <div
                    className="items-title"
                    onClick={item.subMenu ? this.dropDownHandler1 : null}
                  >
                    <h5>
                      <img src={item.logo} />
                      <span>{item.name}</span>
                    </h5>
                    {item.subMenu ? (
                      <i className="bi bi-chevron-down"></i>
                    ) : null}
                  </div>
                  <div
                    className={dropDown1 ? "items-link active" : "items-link"}
                  >
                    {item.subMenu ? (
                      <div className="category-menu">
                        {SubMenuData.map((i , index) => {
                          return (
                            <div className="category-item" key={index}>
                              <div
                                className="category-title"
                                onClick={this.dropDownHandler2}
                              >
                                <span>{i.title}</span>
                                <i className="bi bi-chevron-down"></i>
                              </div>
                              <div
                                className={
                                  dropDown2 ? "cat-items active" : "cat-items"
                                }
                              >
                                {i.subMenu.map((cat , index) => {
                                  return (
                                    <div className="cat-item" key={index}>
                                      <div
                                        className="cat-item-title"
                                        onClick={cat.phoneMenu ? this.dropDownHandler3 : null}
                                      >
                                        <span>{cat.Title}</span>
                                        {cat.phoneMenu ? (
                                          <i className="bi bi-chevron-down"></i>
                                        ) : null}
                                      </div>
                                      <div
                                        className={
                                          dropDown3
                                            ? "cat-item-subMenu active"
                                            : "cat-item-subMenu"
                                        }
                                      >
                                        <div className="cat-item-subMenu-items">
                                          {cat.phoneMenu
                                            ? cat.phoneMenu.map((it , ) => {
                                                return (
                                                  <div>
                                                    <h5 key={it.id}>
                                                      {it.subItem}
                                                    </h5>
                                                  </div>
                                                );
                                              })
                                            : null}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })} */
}
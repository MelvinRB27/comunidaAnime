const navLinkGroups = [
    {
      links: [
        // {
        //   name: "Home",
        //   url: "http://example.com",
        //   expandAriaLabel: "Expand Home section",
        //   links: [
        //     {
        //       name: "Activity",
        //       url: "http://msn.com",
        //       key: "key1",
        //       target: "_blank",
        //     },
        //     {
        //       name: "MSN",
        //       url: "http://msn.com",
        //       disabled: true,
        //       key: "key2",
        //       target: "_blank",
        //     },
        //   ],
        //   isExpanded: true,
        // },
        {
          name: "Home",
          url: "/",
          key: "key3",
          isExpanded: true,
        //   target: "_blank",
        },
        {
          name: "Movies",
          url: "/movies",
          key: "key4",
        },
        {
          name: "Login",
          url: "/login",
          key: "key5",
          disabled: true,
        },
      ],
    },
  ];

export default navLinkGroups
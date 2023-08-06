import { RawNotesCollection } from "types";

const notes: RawNotesCollection = {
  note1: {
    id: "1",
    title: "Lorem Ipsum",
    meta: {
      timestamp: 1641696000, // January 9, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content: "Lorem ipsum dolor sit amet",
  },
  note2: {
    id: "2",
    title: "Nulla ac justo",
    meta: {
      timestamp: 1641782400, // January 10, 2022 00:00:00 UTC
      author: "Jane Smith",
    },
    content: "Nulla ac justo id dui convallis mollis",
  },
  note3: {
    id: "3",
    title: "Praesent aliquam",
    meta: {
      timestamp: 1641868800, // January 11, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content: "Praesent aliquam mi ac nisl eleifend",
  },
  note4: {
    id: "4",
    title: "Vestibulum ante",
    meta: {
      timestamp: 1641955200, // January 12, 2022 00:00:00 UTC
      author: "Jane Smith",
    },
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras euismod ante at enim tincidunt",
  },
  note5: {
    id: "5",
    title: "Sed at lacinia",
    meta: {
      timestamp: 1642041600, // January 13, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content:
      "Sed at lacinia sapien, id auctor erat. Sed id nulla a tortor finibus tincidunt",
  },
  note6: {
    id: "6",
    title: "Mauris auctor",
    meta: {
      timestamp: 1642128000, // January 14, 2022 00:00:00 UTC
      author: "Jane Smith",
    },
    content:
      "Mauris auctor velit vitae consectetur. Fusce vel leo id tellus finibus ultrices",
  },
  note7: {
    id: "7",
    title: "Integer tempor",
    meta: {
      timestamp: 1642214400, // January 15, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content:
      "Integer tempor tellus sit amet dui molestie, in fringilla ex feugiat",
  },
  note8: {
    id: "8",
    title: "Duis non lacinia",
    meta: {
      timestamp: 1642300800, // January 16, 2022 00:00:00 UTC
      author: "Jane Smith",
    },
    content:
      "Duis non lacinia sem. Duis risus orci, luctus ut velit vitae, efficitur mollis sem",
  },
  note9: {
    id: "9",
    title: "Aenean nec nunc",
    meta: {
      timestamp: 1642387200, // January 17, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content: "Aenean nec nunc vehicula, iaculis magna ut, tincidunt ligula",
  },
  note10: {
    id: "10",
    title: "Phasellus sit amet",
    meta: {
      timestamp: 1642473600, // January 18, 2022 00:00:00 UTC
      author: "Jane Smith",
    },
    content: "Phasellus sit amet volutpat purus, et tristique ipsum",
  },
  note11: {
    id: "11",
    title: "Fusce aliquam",
    meta: {
      timestamp: 1642560000, // January 19, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content: "Fusce aliquam nunc at eros ultrices, et interdum mauris iaculis",
  },
  note12: {
    id: "12",
    title: "Suspendisse eleifend",
    meta: {
      timestamp: 1642646400, // January 20, 2022 00:00:00 UTC
      author: "Jane Smith",
    },
    content:
      "Suspendisse eleifend orci sed arcu lacinia, eget consectetur turpis consectetur",
  },
  note13: {
    id: "13",
    title: "Vestibulum id dui",
    meta: {
      timestamp: 1642732800, // January 21, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content: "Vestibulum id dui maximus, efficitur arcu ut, fringilla ex",
  },
  note14: {
    id: "14",
    title: "Mauris ullamcorper",
    meta: {
      timestamp: 1642819200, // January 22, 2022 00:00:00 UTC
      author: "Jane Smith",
    },
    content: "Mauris ullamcorper libero id mauris condimentum consequat",
  },
  note15: {
    id: "15",
    title: "Cras sed eros",
    meta: {
      timestamp: 1642905600, // January 23, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content: "Cras sed eros viverra, sagittis leo et, mollis ipsum",
  },
  note16: {
    id: "16",
    title: "Donec lobortis",
    meta: {
      timestamp: 1642992000, // January 24, 2022 00:00:00 UTC
      author: "Jane Smith",
    },
    content: "Donec lobortis enim sed elit aliquet, et lobortis ligula cursus",
  },
  note17: {
    id: "17",
    title: "Etiam bibendum",
    meta: {
      timestamp: 1643078400, // January 25, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content: "Etiam bibendum dolor vel nunc malesuada, a lacinia magna laoreet",
  },
  note18: {
    id: "17",
    title: "Etiam bibendum",
    content: "Etiam bibendum dolor vel nunc malesuada, a lacinia magna laoreet",
  },
  note19: {
    id: "17",
    content: "Etiam bibendum dolor vel nunc malesuada, a lacinia magna laoreet",
  },
  note20: {
    id: "17",
    meta: {
      timestamp: 1643078400, // January 25, 2022 00:00:00 UTC
      author: "John Doe",
    },
    content: "Etiam bibendum dolor vel nunc malesuada, a lacinia magna laoreet",
  },
};

export default defineEventHandler((event) => {
  return notes;
});

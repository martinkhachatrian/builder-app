"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Button from '@/components/button';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      friendlyName: 'Text',
      name: "text",
      type: "text",
      defaultValue: 'Button'
    },
    {
      friendlyName: 'Variant',
      name: "variant",
      type: 'list',
      subFields: [
        {
          friendlyName: 'Primary',
          name: "filled",
          type: 'string',
          defaultValue: 'filled'
        }
      ],
      // enum: ['Primary', 'Secondary', 'Tertiary'],
      // onChange: (list) => {
      //   const map = new Map([['Primary', 'filled'], ['Secondary', 'outlined'], ['Tertiary', 'text']])
      //   const variant = list.get('variant')
      //
      //   list.set('variant', map.get(variant))
      //
      //   console.info(list.get('variant'))
      //
      //   // if (options.get('myList').length > 6) {
      //   //   options.set('myList', options.get('myList').slice(0, 6))
      //   //   alert('maximum items is 6, delete items to continue')
      //   // }
      // }
    },
  ]
});

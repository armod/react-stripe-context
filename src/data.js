import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa'
import React from 'react'

const sublinks = [
  {
    page: 'products',
    links: [
      {
        label: 'payment',
        icon: <FaCreditCard />,
        url: '/products',
      },
      {
        label: 'terminal',
        icon: <FaCreditCard />,
        url: '/products',
      },
      {
        label: 'connect',
        icon: <FaCreditCard />,
        url: '/products',
      },
    ],
  },
  {
    page: 'developer',
    links: [
      {
        label: 'plugins',
        icon: <FaBook />,
        url: '/products',
      },
      {
        label: 'libraries',
        icon: <FaBook />,
        url: '/products',
      },
      {
        label: 'help',
        icon: <FaBook />,
        url: '/products',
      },
      {
        label: 'billding',
        icon: <FaBook />,
        url: '/products',
      },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/product' },
      { label: 'about', icon: <FaBriefcase />, url: '/product' },
    ],
  },
]

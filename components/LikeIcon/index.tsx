import { Icon } from '@chakra-ui/react';
import { LayoutProps } from '@chakra-ui/styled-system';

const LikeIcon = ({ color, ...layoutProps }: LayoutProps & { color: string }) => (
  <Icon {...layoutProps} viewBox="0 0 512 512">
    <path
      fill={color}
      d="M512,217.229c0-27.618-22.469-50.087-50.087-50.087H341.119l17.585-47.974c0.057-0.155,0.111-0.309,0.163-0.465
c8.475-25.422,6.342-52.096-6.17-77.145c-9.441-18.883-28.417-30.613-49.522-30.613h-5.868c-14.212,0-26.233,11.103-27.37,25.274
C267.951,61,257.322,84.472,240.009,102.32l-96.738,98.214h-9.706v-16.696c0-9.22-7.475-16.696-16.696-16.696H16.696
C7.475,167.142,0,174.618,0,183.838V484.36c0,9.22,7.475,16.696,16.696,16.696H116.87c9.22,0,16.696-7.475,16.696-16.696v-16.696
h278.261c27.618,0,50.087-22.469,50.087-50.087c0-8.924-2.344-17.309-6.452-24.573c13.911-8.909,23.148-24.5,23.148-42.21
c0-8.924-2.344-17.309-6.452-24.573c13.911-8.909,23.148-24.5,23.148-42.21c0-8.924-2.344-17.309-6.452-24.573
C502.763,250.531,512,234.939,512,217.229z M100.174,217.229v233.739v16.696H33.391v-267.13h66.783V217.229z M461.913,233.925
h-16.696h-33.391c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h33.391c9.206,0,16.696,7.49,16.696,16.696
s-7.49,16.696-16.696,16.696h-16.696H395.13c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h33.391
c9.206,0,16.696,7.49,16.696,16.696s-7.49,16.696-16.696,16.696h-16.696c-0.875,0-1.727,0.088-2.567,0.217h-31.933
c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h33.391c0.749,0,1.48-0.067,2.203-0.162
c8.696,0.568,15.602,7.804,15.602,16.64c0,9.206-7.49,16.696-16.696,16.696H133.565V233.924h16.696
c4.472,0,8.756-1.794,11.895-4.98l101.687-103.239c0.028-0.028,0.056-0.057,0.082-0.085
c21.459-22.098,35.096-50.784,38.752-81.286h0.498c8.375,0,15.908,4.658,19.653,12.15c8.553,17.121,10.043,34.424,4.433,51.436
l-25.72,70.171c-1.878,5.121-1.134,10.836,1.989,15.307c3.123,4.471,8.232,7.135,13.687,7.135h144.696
c9.206,0,16.696,7.49,16.696,16.696S471.119,233.925,461.913,233.925z"
    />
  </Icon>
);

export default LikeIcon;
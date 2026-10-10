'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'

/* ─── Lab icons ───────────────────────────────────────────────────
   Real brand marks, sourced from Simple Icons (CC0), Wikimedia
   Commons, and cognition.ai. Rendered monochrome via currentColor.
────────────────────────────────────────────────────────────────── */

const ICON_PATHS: Record<string, { viewBox: string; paths: string[]; polygons?: string[] }> = {
  // Simple Icons — Claude
  anthropic: {
    viewBox: '0 0 24 24',
    paths: [
      'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z',
    ],
  },
  // Wikimedia Commons — OpenAI logo 2025 (symbol)
  openai: {
    viewBox: '1.68 1.75 16.65 16.5',
    paths: [
      'M11.248 18.25q-.825 0-1.568-.314a4.3 4.3 0 0 1-1.32-.874 4 4 0 0 1-1.304.214 4 4 0 0 1-2.046-.544 4.27 4.27 0 0 1-1.518-1.485 4 4 0 0 1-.56-2.095q0-.48.131-1.04A4.4 4.4 0 0 1 2.04 10.71a4.07 4.07 0 0 1 .017-3.4 4.2 4.2 0 0 1 1.056-1.418 3.8 3.8 0 0 1 1.6-.842 3.9 3.9 0 0 1 .76-1.683q.593-.759 1.451-1.188a4.04 4.04 0 0 1 1.832-.429q.825 0 1.567.313.742.314 1.32.875a4 4 0 0 1 1.304-.215q1.106 0 2.046.545a4.14 4.14 0 0 1 1.501 1.485q.578.941.578 2.095 0 .48-.132 1.04.66.61 1.023 1.419.363.792.363 1.666 0 .892-.38 1.717a4.3 4.3 0 0 1-1.072 1.435 3.8 3.8 0 0 1-1.584.825 3.8 3.8 0 0 1-.775 1.683 4.06 4.06 0 0 1-1.436 1.188 4.04 4.04 0 0 1-1.832.429m-4.076-2.062q.825 0 1.435-.347l3.103-1.782a.36.36 0 0 0 .164-.313v-1.42L7.881 14.62a.67.67 0 0 1-.726 0l-3.118-1.798a.5.5 0 0 1-.017.115v.198q0 .841.396 1.551.413.693 1.139 1.089a3.2 3.2 0 0 0 1.617.412m.165-2.69a.4.4 0 0 0 .181.05q.083 0 .165-.05l1.238-.71-3.977-2.31a.7.7 0 0 1-.363-.643v-3.58q-.825.362-1.32 1.122a2.9 2.9 0 0 0-.495 1.65q0 .809.413 1.55.412.743 1.072 1.123zm3.91 3.663q.875 0 1.585-.396a2.96 2.96 0 0 0 1.534-2.64v-3.564a.32.32 0 0 0-.165-.297l-1.254-.726v4.604a.7.7 0 0 1-.363.643l-3.119 1.799a3 3 0 0 0 1.783.577m.627-6.039V8.878L10.01 7.822 8.129 8.878v2.244l1.881 1.056zM7.057 5.859a.7.7 0 0 1 .363-.644l3.119-1.798a3 3 0 0 0-1.782-.578q-.874 0-1.584.396A2.96 2.96 0 0 0 6.05 4.324a3.07 3.07 0 0 0-.396 1.551v3.547q0 .199.165.314l1.237.726zm8.383 7.887q.825-.364 1.303-1.123.495-.758.495-1.65a3.15 3.15 0 0 0-.412-1.55q-.413-.743-1.073-1.123l-3.086-1.782q-.099-.065-.181-.049a.3.3 0 0 0-.165.05l-1.238.692 3.993 2.327a.6.6 0 0 1 .264.264.64.64 0 0 1 .1.363zm-3.317-8.382a.63.63 0 0 1 .726 0l3.135 1.831v-.297q0-.792-.396-1.501a2.86 2.86 0 0 0-1.105-1.155q-.71-.43-1.65-.43-.825 0-1.436.347L8.294 5.941a.36.36 0 0 0-.165.314v1.418z',
    ],
  },
  // Simple Icons — Google Gemini
  google: {
    viewBox: '0 0 24 24',
    paths: [
      'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81',
    ],
  },
  // Wikimedia Commons — XAI Logo
  xai: {
    viewBox: '201.61 56.91 438.67 481.45',
    paths: [],
    polygons: [
      '557.09,211.99 565.4,538.36 631.96,538.36 640.28,93.18',
      '640.28,56.91 538.72,56.91 379.35,284.53 430.13,357.05',
      '201.61,538.36 303.17,538.36 353.96,465.84 303.17,393.31',
      '201.61,211.99 430.13,538.36 531.69,538.36 303.17,211.99',
    ],
  },
  // Simple Icons — Cursor
  cursor: {
    viewBox: '0 0 24 24',
    paths: [
      'M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23',
    ],
  },
  // cognition.ai — Devin mark
  devin: {
    viewBox: '-0.747952 -0.722232 21.495942 21.477469',
    paths: [
      'M13.2603 8.85657C13.6689 8.62171 14.174 8.62171 14.5826 8.85657L15.6386 9.46628C15.6723 9.48514 15.7089 9.5 15.746 9.51028C15.7534 9.51314 15.7609 9.51485 15.7694 9.516C15.806 9.52457 15.8431 9.52914 15.8797 9.53085H15.8854C15.89 9.53085 15.8929 9.53085 15.8974 9.52914C15.9311 9.52914 15.9649 9.52343 15.9986 9.516C16.0043 9.516 16.0106 9.51428 16.0163 9.51143C16.0517 9.50114 16.0866 9.48628 16.1191 9.46914C16.122 9.46743 16.1266 9.46628 16.1294 9.46457L18.2403 8.24514C18.3917 8.15828 18.4843 7.99714 18.4843 7.82228V5.384C18.4843 5.20914 18.3917 5.04742 18.2403 4.96114L16.1294 3.74171C15.978 3.65485 15.7917 3.65485 15.6403 3.74171L13.5294 4.96114C13.5294 4.96114 13.5237 4.96571 13.5209 4.96685C13.4889 4.98571 13.4574 5.00971 13.4311 5.036C13.4266 5.04057 13.4237 5.04457 13.4191 5.04914C13.3957 5.07428 13.3751 5.10228 13.3563 5.13142C13.3534 5.136 13.3506 5.14 13.3477 5.14628C13.33 5.17885 13.3151 5.21257 13.3049 5.24914C13.302 5.25657 13.3003 5.264 13.2991 5.27257C13.2906 5.30914 13.2843 5.34742 13.2843 5.38742V6.60685C13.2843 7.07714 13.0317 7.516 12.6231 7.75085C12.2146 7.98571 11.7094 7.98571 11.3009 7.75085L10.2449 7.14114C10.2111 7.12228 10.1746 7.10742 10.1374 7.09714C10.13 7.09428 10.1226 7.09257 10.114 7.09142C10.0774 7.08285 10.0403 7.07828 10.0037 7.07657H9.98771C9.95228 7.07657 9.91857 7.08228 9.88485 7.08971C9.87914 7.08971 9.87285 7.09142 9.86885 7.09257C9.83228 7.10285 9.79857 7.11771 9.76428 7.13542C9.76142 7.13714 9.75685 7.13828 9.75399 7.14L7.64314 8.35942C7.49171 8.44628 7.39914 8.60742 7.39914 8.78228V11.2206C7.39914 11.3954 7.49171 11.5571 7.64314 11.6434L9.75399 12.8629C9.75399 12.8629 9.76142 12.8657 9.76428 12.8674C9.79799 12.8851 9.83171 12.9 9.86885 12.9103C9.87457 12.912 9.88085 12.9131 9.88657 12.9149C9.92028 12.9223 9.95399 12.9269 9.98771 12.928C9.99228 12.928 9.99514 12.9297 9.99971 12.9297H10.0054C10.042 12.9297 10.0791 12.924 10.1157 12.9149C10.1231 12.9131 10.1306 12.9103 10.1391 12.9091C10.1757 12.8989 10.2111 12.884 10.2466 12.8651L11.3026 12.2554C11.7111 12.0206 12.2163 12.0206 12.6243 12.2554C13.0311 12.4903 13.2854 12.9297 13.2854 13.4V14.6194C13.2854 14.6589 13.2911 14.6971 13.3003 14.7337C13.302 14.7411 13.3031 14.7497 13.306 14.7571C13.3163 14.7926 13.3311 14.8274 13.3483 14.86C13.3511 14.8646 13.354 14.8686 13.3574 14.8749C13.3751 14.904 13.3957 14.932 13.4209 14.9571C13.4254 14.9617 13.4283 14.9657 13.4329 14.9703C13.4591 14.9966 13.49 15.0189 13.5226 15.0394C13.5254 15.0411 13.5283 15.044 13.5311 15.0451L15.642 16.2646C15.7169 16.3086 15.802 16.3309 15.886 16.3309C15.97 16.3309 16.0551 16.3086 16.13 16.2646L18.2409 15.0451C18.3923 14.9583 18.4849 14.7971 18.4849 14.6223V12.184C18.4849 12.0091 18.3923 11.8474 18.2409 11.7611L16.13 10.5417C16.13 10.5417 16.1226 10.5389 16.1197 10.5371C16.086 10.5194 16.0523 10.5046 16.0157 10.4943C16.01 10.4931 16.0054 10.4931 15.9997 10.4914C15.966 10.4829 15.9306 10.4783 15.8969 10.4783H15.8809C15.8443 10.4783 15.8077 10.484 15.7706 10.4931C15.7631 10.4949 15.7557 10.4977 15.7489 10.4989C15.7123 10.5091 15.6769 10.524 15.6414 10.5429L14.5854 11.1526C14.1786 11.3874 13.6717 11.3874 13.2637 11.1526C12.8569 10.9177 12.6026 10.4783 12.6026 10.008C12.6026 9.53771 12.8551 9.09885 13.2637 8.86343L13.262 8.85771L13.2603 8.85657Z',
      'M1.75971 8.24743L3.87057 9.46685C3.94542 9.51085 4.03057 9.53314 4.11457 9.53314C4.19857 9.53314 4.28371 9.51085 4.35857 9.46685L6.46942 8.24743C6.46942 8.24743 6.47514 8.24285 6.47799 8.24171C6.51057 8.22285 6.54085 8.19885 6.56771 8.17257C6.57228 8.168 6.57514 8.164 6.57971 8.15942C6.60314 8.13428 6.62371 8.10628 6.64314 8.07714C6.64599 8.07257 6.64885 8.06857 6.65171 8.06228C6.66942 8.02971 6.68428 7.996 6.69457 7.95942C6.69742 7.952 6.69914 7.94457 6.70028 7.936C6.70885 7.89943 6.71514 7.86114 6.71514 7.82171V6.60228C6.71514 6.132 6.96771 5.69314 7.37628 5.45828C7.78485 5.22342 8.28999 5.22342 8.69857 5.45828L9.75457 6.068C9.78828 6.08685 9.82485 6.10171 9.86199 6.112C9.86942 6.11485 9.87685 6.11657 9.88542 6.11771C9.92199 6.12628 9.95742 6.13085 9.99571 6.13257H10.0014C10.006 6.13257 10.0089 6.13085 10.0134 6.13085C10.0471 6.13085 10.0809 6.12514 10.1146 6.11771C10.1203 6.11771 10.1266 6.116 10.1323 6.11314C10.1689 6.10285 10.2026 6.088 10.2369 6.07028C10.2397 6.06914 10.2443 6.06742 10.2471 6.06571L12.358 4.84628C12.5094 4.75942 12.602 4.59828 12.602 4.42342V1.98514C12.602 1.81028 12.5094 1.64857 12.358 1.56228L10.2471 0.342853C10.0957 0.255996 9.90942 0.255996 9.75799 0.342853L7.64714 1.56228C7.64714 1.56228 7.64142 1.56685 7.63857 1.568C7.60657 1.58685 7.57571 1.61085 7.54885 1.63714C7.54428 1.64171 7.54142 1.64571 7.53685 1.65028C7.51342 1.67542 7.49285 1.70342 7.47342 1.73257C7.47057 1.73714 7.46771 1.74114 7.46485 1.74742C7.44714 1.78 7.43228 1.81371 7.42199 1.85028C7.41914 1.85771 7.41742 1.86514 7.41628 1.87371C7.40714 1.91028 7.40142 1.94857 7.40142 1.98857V3.208C7.40142 3.67828 7.14885 4.11714 6.74028 4.35257C6.33342 4.58742 5.82657 4.58742 5.41799 4.35257L4.36199 3.74285C4.32828 3.724 4.29171 3.70914 4.25457 3.69885C4.24714 3.696 4.23971 3.69428 4.23114 3.69314C4.19457 3.68457 4.15742 3.68 4.12085 3.67828H4.10485C4.06942 3.67828 4.03571 3.684 4.00199 3.69142C3.99628 3.69142 3.98999 3.69314 3.98599 3.69428C3.94942 3.70457 3.91571 3.71942 3.88142 3.73714C3.87857 3.73885 3.87399 3.74 3.87114 3.74171L1.76028 4.96114C1.60885 5.048 1.51628 5.20914 1.51628 5.384V7.82228C1.51628 7.99714 1.60885 8.15885 1.76028 8.24514V8.248L1.75971 8.24743Z',
      'M12.3551 15.1514L10.2443 13.932C10.2443 13.932 10.2369 13.9291 10.234 13.9274C10.2003 13.9097 10.1666 13.8954 10.1294 13.8851C10.1237 13.8834 10.1174 13.8823 10.1117 13.8806C10.078 13.8731 10.0443 13.8674 10.0089 13.8674H9.99285C9.95628 13.8674 9.91914 13.8731 9.88257 13.8823C9.87514 13.884 9.86771 13.8869 9.86028 13.888C9.82371 13.8983 9.78828 13.9131 9.75285 13.932L8.69685 14.5417C8.28999 14.7766 7.78314 14.7766 7.37628 14.5417C6.96771 14.3069 6.71514 13.8674 6.71514 13.3971V12.1777C6.71514 12.1383 6.70942 12.1 6.70028 12.0629C6.69914 12.0554 6.69742 12.0469 6.69457 12.0394C6.68428 12.004 6.66942 11.9691 6.65171 11.9366C6.64885 11.932 6.64599 11.928 6.64314 11.9217C6.62542 11.8926 6.60485 11.8646 6.57971 11.8394C6.57514 11.8349 6.57228 11.8309 6.56828 11.8263C6.54199 11.8 6.51114 11.7777 6.47857 11.7571C6.47571 11.7554 6.47285 11.7526 6.46999 11.7514L4.35914 10.532C4.20771 10.4451 4.02142 10.4451 3.86999 10.532L1.75914 11.7514C1.60771 11.8383 1.51514 11.9994 1.51514 12.1743V14.6126C1.51514 14.7874 1.60771 14.9491 1.75914 15.0354L3.86999 16.2549C3.86999 16.2549 3.87742 16.2577 3.88028 16.2594C3.91399 16.2771 3.94771 16.2914 3.98314 16.3017C3.98885 16.3034 3.99514 16.3046 4.00085 16.3063C4.03457 16.3137 4.06714 16.3183 4.10199 16.3194C4.10657 16.3194 4.11057 16.3206 4.11399 16.3206H4.11971C4.15628 16.3206 4.19342 16.3149 4.22828 16.3057C4.23571 16.304 4.24428 16.3011 4.25171 16.3C4.28828 16.2897 4.32371 16.2749 4.35914 16.256L5.41514 15.6463C5.82371 15.4114 6.32885 15.4114 6.73742 15.6463C7.14428 15.8811 7.39857 16.3206 7.39857 16.7909V18.0103C7.39857 18.0497 7.40428 18.088 7.41342 18.1251C7.41514 18.1326 7.41628 18.1411 7.41914 18.1486C7.42942 18.184 7.44428 18.2189 7.46199 18.2514C7.46485 18.256 7.46771 18.26 7.47057 18.2663C7.48828 18.2954 7.50885 18.3234 7.53399 18.3486C7.53857 18.3531 7.54142 18.3571 7.54542 18.3617C7.57171 18.388 7.60257 18.4103 7.63514 18.4309C7.63799 18.4326 7.64085 18.4354 7.64428 18.4366L9.75514 19.656C9.82999 19.7 9.91514 19.7223 9.99914 19.7223C10.0831 19.7223 10.1683 19.7 10.2431 19.656L12.354 18.4366C12.5054 18.3497 12.598 18.1886 12.598 18.0137V15.5754C12.598 15.4006 12.5054 15.2389 12.354 15.1526L12.3551 15.1514Z',
    ],
  },
  // Simple Icons — Mistral AI
  mistral: {
    viewBox: '0 0 24 24',
    paths: [
      'M17.143 3.429v3.428h-3.429v3.429h-3.428V6.857H6.857V3.43H3.43v13.714H0v3.428h10.286v-3.428H6.857v-3.429h3.429v3.429h3.429v-3.429h3.428v3.429h-3.428v3.428H24v-3.428h-3.43V3.429z',
    ],
  },
  // Simple Icons — OpenCode
  opencode: {
    viewBox: '0 0 24 24',
    paths: ['M22 24H2V0h20zM17 4.8H7v14.4h10z'],
  },
  // Simple Icons — Meta AI (the orbit mark Meta introduced alongside Muse)
  muse: {
    viewBox: '0 0 24 24',
    paths: [
      'M10.73.032c-1.333 0-2.032 1.016-2.032 2.285 0 2.223 2.127 4.953 4.318 4.953 1.301 0 2-.953 2-2.254 0-2.254-2.095-4.984-4.286-4.984m8.413 2.984c-1.968 0-3.397 2.73-3.397 4.825 0 1.556.794 3.016 2.254 3.016 2 0 3.365-2.762 3.365-4.794 0-1.523-.762-3.047-2.222-3.047M4.857 4.159c-1.968 0-3.778 1.016-3.778 2.54 0 1.65 2.16 2.793 4.254 2.793 1.873 0 3.778-.92 3.778-2.508 0-1.682-2.159-2.825-4.254-2.825m-.222 6.476C2.413 10.635 0 13.175 0 15.397c0 1.301.825 2.159 2.095 2.159 2.19 0 4.603-2.508 4.603-4.794 0-1.27-.761-2.127-2.063-2.127m16.667.698c-2.223 0-5.016 1.62-5.016 3.651 0 1.238 1.047 2.19 2.698 2.19 2.159 0 5.016-1.587 5.016-3.682 0-1.302-1.08-2.159-2.698-2.159M7.619 16c-1.524 0-2.38 1.746-2.38 3.429 0 2.063 1.269 4.54 3.047 4.54 1.524 0 2.38-1.81 2.38-3.461C10.667 18.57 9.46 16 7.62 16m6.571 1.016c-1.333 0-2.476.667-2.476 2.032 0 2.095 2.667 4.063 4.92 4.063 1.366 0 2.54-.73 2.54-2.063 0-2.032-2.698-4.032-4.984-4.032',
    ],
  },
  // Simple Icons — DeepSeek
  deepseek: {
    viewBox: '0 0 24 24',
    paths: [
      'M23.748 4.651c-.254-.124-.364.113-.512.233-.051.04-.094.09-.137.137-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.155-.708-.311-.955-.65-.172-.24-.219-.509-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.094.172.187.129.323-.082.28-.18.553-.266.833-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836.27-.098.094-.433-.778-.428-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136 9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653 1.857 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.132-.284 4.994-1.86.47.234.962.328 1.78.398.629.058 1.235-.031 1.705-.129.735-.155.684-.836.418-.961-2.155-1.004-1.682-.595-2.112-.926 1.095-1.295 2.768-3.598 3.284-6.733.05-.346.115-.834.108-1.114-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16-.39.024-.32.472-.234.763.09.288.207.487.371.74.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.168-1.361-.801-2.5-1.86-3.301-3.306-.775-1.393-1.225-2.888-1.299-4.482-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774.868.86 1.525 1.887 2.202 2.89.72 1.066 1.494 2.082 2.48 2.915.348.291.626.513.892.677-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287.3.3 0 0 1 .113.074.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078.253.253 0 0 1-.114-.358 1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.392.451.462.576.685.915.176.264.336.536.446.848.066.194-.02.353-.25.45',
    ],
  },
}

export function LabIcon({ lab, size = 14 }: { lab: string; size?: number }) {
  const icon = ICON_PATHS[lab]

  if (!icon) {
    // unknown / unrevealed lab
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0, display: 'block' }}>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="12" y="16" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="monospace">
          ?
        </text>
      </svg>
    )
  }

  return (
    <svg width={size} height={size} viewBox={icon.viewBox} fill="currentColor" style={{ flexShrink: 0, display: 'block' }}>
      {icon.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
      {icon.polygons?.map((points, i) => (
        <polygon key={i} points={points} />
      ))}
    </svg>
  )
}

/* ─── Lab colours ─────────────────────────────────────────────────
   Accent per lab, used to tint icons, chips and cards. Monochrome
   brands stay neutral on purpose.
────────────────────────────────────────────────────────────────── */

export const LAB_COLORS: Record<string, string> = {
  openai: '#10a37f',
  anthropic: '#d97757',
  google: '#6f8ff0',
  deepseek: '#5b7bff',
  mistral: '#fa7a3c',
  devin: '#4fb8e8',
  muse: '#3b82f6',
  glm: '#9b7bff',
  xai: '#d4d4d4',
  cursor: '#d4d4d4',
  opencode: '#d4d4d4',
}

const labColor = (lab?: string) => (lab && LAB_COLORS[lab]) || '#bdbdbd'

/* ─── Floor is Lava ───────────────────────────────────────────────
   Pure-CSS isometric scene. A little developer hops between
   platforms named after models; each platform glows red-hot and
   sinks into the lava right as they leave it, then rises again
   before they come back around. 12s infinite loop, no JS animation.

   Timing: the character stands on platform k during [2k, 2k+2)s and
   departs at t = 2k+1.1. Platform k's local animation clock is
   offset by (2k - 10)s so its heat-up and sink sequence starts just
   after departure, and it is fully risen (and cooled) ~4.5s before
   the character lands on it next cycle. The HUD label for platform k is
   offset by (2k - 12)s so it shows while the character is on it.

   The lava is a WebGL shader (see LavaShader), with the vector crust
   (LavaCrust) as the server-rendered / no-WebGL fallback.
────────────────────────────────────────────────────────────────── */

const PLATFORMS: { label: string; lab: string; cx: number; cy: number }[] = [
  { label: 'gpt-6-astra', lab: 'openai', cx: 385, cy: 230 },
  { label: 'claude', lab: 'anthropic', cx: 307.5, cy: 364.2 },
  { label: 'ds-v4.1-flash', lab: 'deepseek', cx: 152.5, cy: 364.2 },
  { label: 'glm-5', lab: 'glm', cx: 75, cy: 230 },
  { label: 'gemini', lab: 'google', cx: 152.5, cy: 95.8 },
  { label: 'gpt-6-sol', lab: 'openai', cx: 307.5, cy: 95.8 },
]

const EMBERS: { left: number; top: number; delay: string; duration: string; drift: number }[] = [
  { left: 90, top: 120, delay: '0s', duration: '3.4s', drift: 14 },
  { left: 210, top: 250, delay: '0.9s', duration: '4.1s', drift: -10 },
  { left: 360, top: 90, delay: '1.7s', duration: '3.7s', drift: 8 },
  { left: 280, top: 420, delay: '2.4s', duration: '4.4s', drift: -16 },
  { left: 60, top: 320, delay: '0.4s', duration: '3.9s', drift: 12 },
  { left: 420, top: 260, delay: '3.1s', duration: '3.3s', drift: -8 },
  { left: 180, top: 40, delay: '1.2s', duration: '4.6s', drift: 10 },
  { left: 330, top: 300, delay: '2.8s', duration: '3.6s', drift: -12 },
  { left: 130, top: 400, delay: '3.6s', duration: '4.2s', drift: 6 },
  { left: 240, top: 150, delay: '2s', duration: '3.8s', drift: -6 },
  { left: 400, top: 400, delay: '0.7s', duration: '4.8s', drift: 9 },
  { left: 30, top: 200, delay: '2.2s', duration: '4s', drift: -11 },
  { left: 300, top: 30, delay: '3.3s', duration: '3.5s', drift: 7 },
  { left: 150, top: 300, delay: '1.5s', duration: '4.3s', drift: -9 },
]

/* Crust plates: a seeded Voronoi tessellation, built once at module
   load (deterministic, so server and client render identical paths).
   Each layer insets every cell by a different gap, so stacking them
   gives a crack that runs molten → ember → crust. */

type Pt = [number, number]

function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Keep the part of `poly` where x·n <= c.
function clipHalfPlane(poly: Pt[], nx: number, ny: number, c: number): Pt[] {
  const out: Pt[] = []
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i]
    const b = poly[(i + 1) % poly.length]
    const da = a[0] * nx + a[1] * ny - c
    const db = b[0] * nx + b[1] * ny - c
    if (da <= 0) out.push(a)
    if (da <= 0 !== db <= 0) {
      const t = da / (da - db)
      out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t])
    }
  }
  return out
}

const CRUST_MIN = -40
const CRUST_MAX = 500
const CRUST_SEEDS: { p: Pt; molten: boolean }[] = (() => {
  const rand = seeded(7)
  const step = 52
  const seeds: { p: Pt; molten: boolean }[] = []
  for (let y = CRUST_MIN; y < CRUST_MAX; y += step) {
    for (let x = CRUST_MIN; x < CRUST_MAX; x += step) {
      seeds.push({
        p: [x + step / 2 + (rand() - 0.5) * step * 0.8, y + step / 2 + (rand() - 0.5) * step * 0.8],
        // Roughly one in six cells stays open as a molten pool.
        molten: rand() < 0.17,
      })
    }
  }
  return seeds
})()

function crustLayer(gap: number, groups = 1, molten = false): string[] {
  const paths = Array.from({ length: groups }, () => '')
  CRUST_SEEDS.forEach(({ p: a, molten: open }, i) => {
    if (open !== molten) return
    let poly: Pt[] = [
      [CRUST_MIN, CRUST_MIN],
      [CRUST_MAX, CRUST_MIN],
      [CRUST_MAX, CRUST_MAX],
      [CRUST_MIN, CRUST_MAX],
    ]
    for (const { p: b } of CRUST_SEEDS) {
      if (b === a) continue
      const dx = b[0] - a[0]
      const dy = b[1] - a[1]
      const len = Math.hypot(dx, dy)
      if (len > 160) continue
      const nx = dx / len
      const ny = dy / len
      poly = clipHalfPlane(poly, nx, ny, ((a[0] + b[0]) / 2) * nx + ((a[1] + b[1]) / 2) * ny - gap / 2)
      if (poly.length < 3) return
    }
    paths[i % groups] += `M${poly.map((q) => `${q[0].toFixed(1)} ${q[1].toFixed(1)}`).join('L')}Z`
  })
  return paths
}

const CRUST_EMBER = crustLayer(6)[0]
const CRUST_WARM = crustLayer(11)[0]
const CRUST_PLATES = crustLayer(16, 3)
const CRUST_CORES = crustLayer(30)[0]
const CRUST_FILLS = ['#3a1309', '#43170b', '#341009']
const POOL_CORES = crustLayer(22, 1, true)[0]

function LavaCrust() {
  const round = { strokeWidth: 4, strokeLinejoin: 'round' as const }
  return (
    <svg className="fil-crust" viewBox={`${CRUST_MIN} ${CRUST_MIN} ${CRUST_MAX - CRUST_MIN} ${CRUST_MAX - CRUST_MIN}`} aria-hidden="true">
      <path d={CRUST_EMBER} fill="#c2410c" stroke="#c2410c" {...round} />
      <path d={CRUST_WARM} fill="#5a1507" stroke="#5a1507" {...round} />
      {CRUST_PLATES.map((d, i) => (
        <path key={i} d={d} fill={CRUST_FILLS[i]} stroke={CRUST_FILLS[i]} {...round} />
      ))}
      <path d={CRUST_CORES} fill="#1c0804" stroke="#1c0804" opacity={0.75} {...round} />
      <path className="fil-pool" d={POOL_CORES} fill="#ffd77e" stroke="#ffd77e" {...round} />
    </svg>
  )
}

/* Molten lava, drawn by a fragment shader into a canvas that sits on
   the floor of the 3D scene. Crust plates (animated Voronoi cells,
   domain-warped so they flow) drift over molten rock; the cracks
   between them glow white-hot at the centre and fade through orange
   to deep red. The canvas renders at up to 2x the floor size so it
   stays crisp under the perspective transform, and only animates while
   on screen. Until the first frame lands (or without WebGL), the SVG
   crust underneath shows instead. */

const LAVA_VERT = `
attribute vec2 a;
varying vec2 vUv;
void main() {
  vUv = a * 0.5 + 0.5;
  gl_Position = vec4(a, 0.0, 1.0);
}`

const LAVA_FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float uTime;
varying vec2 vUv;

vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = m * p; a *= 0.5; }
  return v;
}

// Distance to the nearest cell border (two-pass, exact), plus a cell id.
vec2 voronoi(vec2 x, float t) {
  vec2 n = floor(x), f = fract(x);
  vec2 mg = vec2(0.0), mr = vec2(0.0);
  float md = 8.0;
  for (int j = -1; j <= 1; j++)
  for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j));
    vec2 o = hash2(n + g);
    o = 0.5 + 0.38 * sin(t + 6.2831 * o);
    vec2 r = g + o - f;
    float d = dot(r, r);
    if (d < md) { md = d; mr = r; mg = g; }
  }
  float id = hash(n + mg);
  md = 8.0;
  for (int j = -2; j <= 2; j++)
  for (int i = -2; i <= 2; i++) {
    vec2 g = mg + vec2(float(i), float(j));
    vec2 o = hash2(n + g);
    o = 0.5 + 0.38 * sin(t + 6.2831 * o);
    vec2 r = g + o - f;
    if (dot(mr - r, mr - r) > 0.00001) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
  }
  return vec2(md, id);
}

vec3 fire(float e) {
  e = clamp(e, 0.0, 1.0);
  vec3 c = mix(vec3(0.16, 0.015, 0.0), vec3(0.78, 0.13, 0.01), smoothstep(0.0, 0.35, e));
  c = mix(c, vec3(1.0, 0.48, 0.05), smoothstep(0.3, 0.68, e));
  c = mix(c, vec3(1.0, 0.86, 0.48), smoothstep(0.68, 0.95, e));
  return c;
}

void main() {
  float t = uTime;
  vec2 p = vUv * 5.6;

  // Slow flow: warp the plate field with drifting noise.
  vec2 q = vec2(fbm(p * 0.55 + vec2(0.0, t * 0.045)), fbm(p * 0.55 + vec2(5.2, -t * 0.038)));
  vec2 w = p + (q - 0.5) * 1.5 + vec2(t * 0.028, t * 0.012);

  vec2 v = voronoi(w, t * 0.12);
  float edge = v.x;
  float id = v.y;

  // Heat field: where it runs high, cracks widen and plates melt into pools.
  float heat = fbm(w * 0.9 + vec2(t * 0.06, -t * 0.04));
  float melt = smoothstep(0.6, 0.78, heat + id * 0.12);
  float width = 0.04 + 0.12 * heat;
  float plate = smoothstep(width, width + 0.05, edge) * (1.0 - melt);

  // Molten rock: swirling, brightest in the middle of each crack, with
  // pulses of heat travelling along the cracks.
  float swirl = fbm(w * 2.6 - vec2(t * 0.22, t * 0.15));
  float core = exp(-edge * 26.0);
  float pulse = 0.7 + 0.6 * noise(w * 2.2 + vec2(t * 0.35, -t * 0.25));
  vec3 molten = fire(0.5 + 0.3 * swirl + 0.32 * core * pulse + 0.2 * melt);

  // Crust: dark, rocky, lit from below near its edges, with a soft halo
  // of heat bleeding onto it from the cracks.
  float rock = fbm(w * 5.0 + id * 7.0);
  float grit = noise(w * 22.0 + id * 3.0);
  vec3 crust = mix(vec3(0.04, 0.013, 0.01), vec3(0.2, 0.065, 0.032), pow(rock, 1.4) * 1.15 + id * 0.18);
  crust *= 0.85 + 0.3 * grit;
  float rim = exp(-edge * 7.5);
  crust += fire(0.35 + 0.3 * heat) * rim * 0.7 * pulse;
  crust += vec3(0.9, 0.24, 0.03) * exp(-edge * 3.2) * 0.16;

  vec3 col = mix(molten, crust, plate);

  // Gentle breathing glow across the whole field.
  col *= 0.93 + 0.07 * sin(t * 0.9 + heat * 6.0);

  // Cooler, darker crust towards the rim of the floor.
  vec2 d = min(vUv, 1.0 - vUv);
  col *= mix(0.35, 1.0, smoothstep(0.0, 0.16, min(d.x, d.y)));

  gl_FragColor = vec4(col, 1.0);
}`

function LavaShader() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null
    }
    const vs = compile(gl.VERTEX_SHADER, LAVA_VERT)
    const fs = compile(gl.FRAGMENT_SHADER, LAVA_FRAG)
    if (!vs || !fs) return
    const prog = gl.createProgram()!
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    // One oversized triangle covers the whole canvas.
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const a = gl.getAttribLocation(prog, 'a')
    gl.enableVertexAttribArray(a)
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0)
    const uTime = gl.getUniformLocation(prog, 'uTime')

    const scale = Math.min(2, Math.max(1.5, window.devicePixelRatio || 1))
    const size = Math.round(canvas.clientWidth * scale) || 690
    canvas.width = size
    canvas.height = size
    gl.viewport(0, 0, size, size)

    const start = performance.now()
    const draw = (now: number) => {
      gl.uniform1f(uTime, 40 + (now - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    draw(start)
    canvas.classList.add('is-ready')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // ~30fps is plenty for lava, and it only runs while on screen.
    let raf = 0
    let last = 0
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      if (now - last < 33) return
      last = now
      draw(now)
    }
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf)
      if (entry.isIntersecting) raf = requestAnimationFrame(loop)
    })
    io.observe(canvas)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  return <canvas ref={ref} className="fil-lava-canvas" aria-hidden="true" />
}

export function FloorIsLava() {
  return (
    <div style={{ margin: '2rem 0' }}>
      <div className="fil-scene">
        <div className="fil-hud">
          <span className="fil-hud-label">King of all models</span>
          <span className="fil-hud-names">
            {PLATFORMS.map((p, i) => (
              <span
                key={p.label}
                className="fil-hud-name"
                style={{ animationDelay: `${2 * i - 12}s` }}
              >
                {p.label}
              </span>
            ))}
          </span>
        </div>
        <div className="fil-hud fil-hud-right">
          <span className="fil-hud-label">Avg. reign</span>
          <span className="fil-hud-value">~12 weeks</span>
        </div>

        <div className="fil-plane">
          <div className="fil-lava-wrap">
            <LavaCrust />
            <div className="fil-lava-heat" />
            <LavaShader />
          </div>

          {PLATFORMS.map((p, i) => (
            <div
              key={`glow-${i}`}
              className="fil-glow"
              style={{ left: p.cx, top: p.cy, animationDelay: `${2 * i - 10}s` }}
            />
          ))}

          {PLATFORMS.map((p, i) => (
            <div
              key={p.label}
              className="fil-platform"
              style={
                {
                  left: p.cx - 38,
                  top: p.cy - 38,
                  animationDelay: `${2 * i - 10}s`,
                } as CSSProperties
              }
            >
              <div className="fil-face fil-top">
                <div className="fil-heat" style={{ animationDelay: `${2 * i - 10}s` }} />
                <div className="fil-top-content">
                  <span className="fil-top-icon">
                    <LabIcon lab={p.lab} size={15} />
                  </span>
                  <span className="fil-label">{p.label}</span>
                </div>
              </div>
              <div className="fil-face fil-front">
                <div className="fil-heat fil-heat-side" style={{ animationDelay: `${2 * i - 10}s` }} />
              </div>
              <div className="fil-face fil-side">
                <div className="fil-heat fil-heat-side" style={{ animationDelay: `${2 * i - 10}s` }} />
              </div>
            </div>
          ))}

          {PLATFORMS.map((p, i) => (
            <div key={`steam-${i}`} className="fil-vent" style={{ left: p.cx, top: p.cy }}>
              {[0, 1, 2].map((j) => (
                <span
                  key={j}
                  className="fil-steam"
                  style={
                    {
                      animationDelay: `${2 * i - 10 + j * 0.18}s`,
                      '--dx': `${(j - 1) * 14}px`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          ))}

          {EMBERS.map((e, i) => (
            <div key={`ember-${i}`} className="fil-vent" style={{ left: e.left, top: e.top }}>
              <span
                className="fil-ember"
                style={
                  {
                    animationDelay: e.delay,
                    animationDuration: e.duration,
                    '--dx': `${e.drift}px`,
                  } as CSSProperties
                }
              />
            </div>
          ))}

          <div className="fil-mover">
            <div className="fil-shadow" />
            <div className="fil-hop">
              <div className="fil-squash">
                <div className="fil-body">
                  <div className="fil-face fil-body-top">
                    <span className="fil-tuft" />
                  </div>
                  <div className="fil-face fil-body-front">
                    <span className="fil-eyes">
                      <span className="fil-eye" />
                      <span className="fil-eye" />
                    </span>
                    <span className="fil-mouth" />
                  </div>
                  <div className="fil-face fil-body-side">
                    <span className="fil-sweat" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Harness Primer ──────────────────────────────────────────────
   Info wrapper for the model / harness / IDE explainer, with a
   pyramid of the stack. Hovering a layer highlights the matching
   definition (and vice versa).
────────────────────────────────────────────────────────────────── */

const PRIMER_LAYERS = [
  {
    id: 'ide',
    color: '#6ea8fe',
    label: 'IDE',
    d: 'M100 10 L73.6 57 L126.4 57 Z',
    labelPos: { x: 100, y: 44 },
    term: 'The IDE',
    def: 'is the surface you sit in. The editor, the tabs, the diffs, the UI. VS Code is an IDE. Cursor is an IDE with a harness baked in — which is precisely why the lines have gotten so blurry.',
  },
  {
    id: 'harness',
    color: '#f0b429',
    label: 'Harness',
    d: 'M68.5 66 L131.5 66 L157.4 112 L42.6 112 Z',
    labelPos: { x: 100, y: 93 },
    term: 'The harness',
    def: 'is everything wrapped around the model that turns it into an agent. The loop that decides when to read a file, run a command, edit code, compact context, spawn a subagent, or stop and ask you for permission. Claude Code is a harness. Codex is a harness. OpenCode is a harness. Same model, different harness — wildly different results.',
  },
  {
    id: 'model',
    color: '#c792ea',
    label: 'Model',
    d: 'M37.6 121 L162.4 121 L190 170 L10 170 Z',
    labelPos: { x: 100, y: 150 },
    term: 'The model',
    def: 'is the raw intelligence. The weights. The API endpoint. GPT, Claude, Gemini — the thing that takes tokens in and pushes tokens out. It knows nothing about your codebase, your tools, or your weekend.',
  },
]

export function HarnessPrimer() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="primer">
      <div className="primer-head">
        <span className="primer-head-icon">i</span>
        Quick primer — the terminology has become hopelessly overloaded
      </div>
      <div className="primer-body">
        <svg
          viewBox="0 0 200 180"
          className={`primer-pyramid${active ? ' primer-has-active' : ''}`}
          aria-hidden="true"
        >
          {PRIMER_LAYERS.map((layer, i) => (
            <g
              key={layer.id}
              style={{ '--c': layer.color, cursor: 'pointer' } as CSSProperties}
              onMouseEnter={() => setActive(layer.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === layer.id ? null : layer.id)}
            >
              <path
                d={layer.d}
                className={`primer-layer${active === layer.id ? ' primer-layer-on' : active ? ' primer-layer-dim' : ''}`}
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              <text
                x={layer.labelPos.x}
                y={layer.labelPos.y}
                textAnchor="middle"
                className={`primer-label${active === layer.id ? ' primer-label-on' : ''}`}
              >
                {layer.label}
              </text>
            </g>
          ))}
        </svg>
        <div className="primer-defs">
          {[...PRIMER_LAYERS].reverse().map((layer) => (
            <p
              key={layer.id}
              style={{ '--c': layer.color } as CSSProperties}
              onMouseEnter={() => setActive(layer.id)}
              onMouseLeave={() => setActive(null)}
              className={`primer-def${active === layer.id ? ' primer-def-on' : ''}`}
            >
              <strong>{layer.term}</strong> {layer.def}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Subscription Stack ────────────────────────────────────────── */

type Tier = { label: string; price: number }

const SUBSCRIPTIONS: { id: string; name: string; lab: string; note: string; tiers: Tier[] }[] = [
  {
    id: 'codex',
    name: 'Codex',
    lab: 'openai',
    note: 'GPT, obviously',
    tiers: [
      { label: 'Plus', price: 20 },
      { label: 'Pro 5x', price: 100 },
      { label: 'Pro 20x', price: 200 },
    ],
  },
  {
    id: 'claude',
    name: 'Claude',
    lab: 'anthropic',
    note: 'the design champion',
    tiers: [
      { label: 'Pro', price: 18 },
      { label: 'Max', price: 90 },
      { label: 'Max 20x', price: 180 },
    ],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    lab: 'cursor',
    note: 'IDE with a harness baked in',
    tiers: [
      { label: 'Pro', price: 20 },
      { label: 'Pro+', price: 60 },
      { label: 'Ultra', price: 200 },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    lab: 'google',
    note: 'the database deletion roulette',
    tiers: [
      { label: 'AI Pro', price: 19 },
      { label: 'AI Ultra', price: 80 },
      { label: 'AI Ultra 20x', price: 190 },
    ],
  },
  {
    id: 'grok',
    name: 'Grok',
    lab: 'xai',
    note: 'comes with the IDE now, apparently',
    tiers: [
      { label: 'SuperGrok', price: 30 },
      { label: 'Heavy', price: 300 },
    ],
  },
  {
    id: 'devin',
    name: 'Devin',
    lab: 'devin',
    note: 'extortionate raw API pricing',
    tiers: [
      { label: 'Pro', price: 20 },
      { label: 'Max', price: 200 },
    ],
  },
  {
    id: 'lechat',
    name: 'Le Chat',
    lab: 'mistral',
    note: 'on European soil',
    tiers: [
      { label: 'Pro', price: 15 },
      { label: 'Team', price: 25 },
    ],
  },
  {
    id: 'opencode',
    name: 'OpenCode Go',
    lab: 'opencode',
    note: 'the free lunch is over',
    tiers: [{ label: 'Go', price: 10 }],
  },
]

const SNARK = [
  'Zero. Living off free tiers and vibes.',
  'Monogamous. Bold choice.',
  'Hedged. Reasonable. For now.',
  'A diversified portfolio of intelligence.',
  'The full roster. Your bodycount is showing.',
  'Beyond a roster now. This is an org chart.',
  'You have become the model router.',
  'One subscription short of a problem. Or one past it.',
  'All of them. The labs send you Christmas cards.',
]

export function SubscriptionStack() {
  const [active, setActive] = useState<Record<string, boolean>>({
    codex: true,
    claude: true,
    cursor: true,
    opencode: true,
  })
  const [tier, setTier] = useState<Record<string, number>>({
    codex: 0,
    claude: 1,
    cursor: 0,
    gemini: 0,
    grok: 0,
    devin: 0,
    lechat: 0,
    opencode: 0,
  })

  const count = SUBSCRIPTIONS.filter((s) => active[s.id]).length
  const total = SUBSCRIPTIONS.reduce(
    (sum, s) => sum + (active[s.id] ? s.tiers[tier[s.id]].price : 0),
    0
  )
  const snark =
    total >= 700
      ? 'You could have hired a very junior intern.'
      : total >= 300
        ? "That's a car payment. For intelligence."
        : SNARK[count]

  return (
    <div className="sub-panel">
      <div className="sub-panel-head">
        <span className="sub-panel-title">Build your roster</span>
        <span className="sub-panel-hint">click to toggle · pick a tier</span>
      </div>
      <div className="sub-grid">
        {SUBSCRIPTIONS.map((s) => {
          const on = active[s.id]
          const selected = s.tiers[tier[s.id]]
          return (
            <div
              key={s.id}
              role="button"
              tabIndex={0}
              aria-pressed={on}
              onClick={() => setActive((prev) => ({ ...prev, [s.id]: !prev[s.id] }))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive((prev) => ({ ...prev, [s.id]: !prev[s.id] }))
                }
              }}
              className={`sub-card${on ? ' sub-card-on' : ''}`}
              style={{ '--lab': labColor(s.lab) } as CSSProperties}
            >
              <span className="sub-head">
                <span className="sub-icon">
                  <LabIcon lab={s.lab} />
                </span>
                <span className="sub-name">{s.name}</span>
                <span className="sub-check" aria-hidden="true" />
              </span>
              <span className="sub-price">
                £{selected.price}
                <span className="sub-price-unit">/mo</span>
              </span>
              <span className="sub-note">{s.note}</span>
              {s.tiers.length > 1 && (
                <span className="sub-tiers">
                  {s.tiers.map((t, i) => (
                    <button
                      key={t.label}
                      type="button"
                      className={`sub-tier${on && i === tier[s.id] ? ' sub-tier-on' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setTier((prev) => ({ ...prev, [s.id]: i }))
                        setActive((prev) => ({ ...prev, [s.id]: true }))
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </span>
              )}
            </div>
          )
        })}
      </div>
      <div className="sub-total">
        <div className="sub-total-row">
          <span className="sub-total-amount">
            £{total}
            <span className="sub-price-unit">/mo</span>
          </span>
          <span className="sub-total-count">
            {count} {count === 1 ? 'subscription' : 'subscriptions'} · £{total * 12}/yr
          </span>
        </div>
        <div className="sub-bar" aria-hidden="true">
          {SUBSCRIPTIONS.filter((s) => active[s.id]).map((s) => (
            <span
              key={s.id}
              className="sub-bar-seg"
              style={{
                flexGrow: s.tiers[tier[s.id]].price,
                background: labColor(s.lab),
              }}
            />
          ))}
        </div>
        <span className="sub-total-snark">{snark}</span>
      </div>
    </div>
  )
}

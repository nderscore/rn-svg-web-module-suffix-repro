import Head from 'next/head';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>react-native-svg web module suffixes bug repo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#252423"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
          <Path d="M15 3v6h6" />
          <Path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
          <Path d="M8 13h0" />
          <Path d="M16 13h0" />
        </Svg>
      </View>
    </>
  )
}

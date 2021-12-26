import { ResponsivePie } from '@nivo/pie';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const PieChart = ({ data /* see data tab */ }) => (
  <div
    style={{
      height: 350,
    }}
  >
    <ResponsivePie
      data={data}
      margin={{ top: 25, right: 95, bottom: 60, left: 80 }}
      valueFormat=" >-"
      startAngle={150}
      endAngle={-150}
      sortByValue={true}
      innerRadius={0.4}
      cornerRadius={5}
      activeOuterRadiusOffset={12}
      colors={{ datum: 'data.color' }}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsTextColor="#1f2937"
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsRadiusOffset={0.3}
      arcLabelsSkipAngle={5}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'Metal',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Glass',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Plastic',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Cartboard',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'Wood',
          },
          id: 'lines',
        },
      ]}
      motionConfig="slow"
      transitionMode="pushIn"
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 15,
          translateY: 40,
          itemsSpacing: 0,
          itemWidth: 65,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 15,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  </div>
);

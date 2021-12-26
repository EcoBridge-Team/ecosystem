// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import * as React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'Panamá',
    color: 'hsl(237, 70%, 50%)',
    data: [
      {
        x: 'cartboard',
        y: 172,
      },
      {
        x: 'tetrapak',
        y: 106,
      },
      {
        x: 'glass bottles',
        y: 88,
      },
      {
        x: 'paper',
        y: 39,
      },
      {
        x: 'plastic bottles',
        y: 176,
      },
      {
        x: 'cans',
        y: 253,
      },
      {
        x: 'plastic bag',
        y: 133,
      },
      {
        x: 'wood',
        y: 241,
      },
      {
        x: 'metal',
        y: 162,
      },
      {
        x: 'plywood',
        y: 157,
      },
      {
        x: 'others',
        y: 299,
      },
    ],
  },
  {
    id: 'El Salvador',
    color: 'hsl(125, 70%, 50%)',
    data: [
      {
        x: 'cartboard',
        y: 104,
      },
      {
        x: 'tetrapak',
        y: 141,
      },
      {
        x: 'glass bottles',
        y: 266,
      },
      {
        x: 'paper',
        y: 88,
      },
      {
        x: 'plastic bottles',
        y: 82,
      },
      {
        x: 'cans',
        y: 154,
      },
      {
        x: 'plastic bag',
        y: 154,
      },
      {
        x: 'wood',
        y: 208,
      },
      {
        x: 'metal',
        y: 84,
      },
      {
        x: 'plywood',
        y: 294,
      },
      {
        x: 'others',
        y: 26,
      },
    ],
  },
  {
    id: 'México City',
    color: 'hsl(10, 70%, 50%)',
    data: [
      {
        x: 'cartboard',
        y: 86,
      },
      {
        x: 'tetrapak',
        y: 140,
      },
      {
        x: 'glass bottles',
        y: 184,
      },
      {
        x: 'paper',
        y: 223,
      },
      {
        x: 'plastic bottles',
        y: 241,
      },
      {
        x: 'cans',
        y: 125,
      },
      {
        x: 'plastic bag',
        y: 60,
      },
      {
        x: 'wood',
        y: 267,
      },
      {
        x: 'metal',
        y: 169,
      },
      {
        x: 'plywood',
        y: 15,
      },
      {
        x: 'others',
        y: 170,
      },
    ],
  },
  {
    id: 'Colombia',
    color: 'hsl(74, 70%, 50%)',
    data: [
      {
        x: 'cartboard',
        y: 300,
      },
      {
        x: 'tetrapak',
        y: 199,
      },
      {
        x: 'glass bottles',
        y: 109,
      },
      {
        x: 'paper',
        y: 204,
      },
      {
        x: 'plastic bottles',
        y: 11,
      },
      {
        x: 'cans',
        y: 253,
      },
      {
        x: 'plastic bag',
        y: 201,
      },
      {
        x: 'wood',
        y: 274,
      },
      {
        x: 'metal',
        y: 243,
      },
      {
        x: 'plywood',
        y: 147,
      },
      {
        x: 'others',
        y: 8,
      },
    ],
  },
  {
    id: 'Costa Rica',
    color: 'hsl(286, 70%, 50%)',
    data: [
      {
        x: 'cartboard',
        y: 43,
      },
      {
        x: 'tetrapak',
        y: 124,
      },
      {
        x: 'glass bottles',
        y: 280,
      },
      {
        x: 'paper',
        y: 152,
      },
      {
        x: 'plastic bottles',
        y: 200,
      },
      {
        x: 'cans',
        y: 99,
      },
      {
        x: 'plastic bag',
        y: 135,
      },
      {
        x: 'wood',
        y: 231,
      },
      {
        x: 'metal',
        y: 231,
      },
      {
        x: 'plywood',
        y: 14,
      },
      {
        x: 'others',
        y: 12,
      },
    ],
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export class MaterialsChart extends React.Component {
  public render() {
    return (
      <div
        style={{
          height: 400,
          minWidth: 800,
        }}
      >
        <ResponsiveLine
          data={data}
          margin={{ top: 60, right: 60, bottom: 40, left: 80 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="catmullRom"
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Recycled Materials by Country',
            legendPosition: 'middle',
            legendOffset: -35,
          }}
          axisRight={null}
          axisBottom={null}
          axisLeft={{
            tickSize: 7,
            tickPadding: 6,
            tickRotation: 0,
            legend: 'Total pounds of Recycled Materials',
            legendPosition: 'middle',
            legendOffset: -50,
          }}
          colors={{ scheme: 'set2' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor', modifiers: [] }}
          pointLabelYOffset={-12}
          areaOpacity={0.35}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 30,
              itemWidth: 100,
              itemHeight: 18,
              itemsSpacing: 4,
              symbolSize: 20,
              symbolShape: 'circle',
              itemDirection: 'right-to-left',
              itemTextColor: '#777',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    );
  }
}

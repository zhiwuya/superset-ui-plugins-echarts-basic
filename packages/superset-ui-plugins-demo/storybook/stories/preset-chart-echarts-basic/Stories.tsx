/* eslint-disable no-magic-numbers, sort-keys */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import { object } from '@storybook/addon-knobs';
import formData from './formData';

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="echarts-basic-radar"
        width={600}
        height={600}
        queryData={{ data: formData.data }}
        formData={formData.form_data}
      />
    ),
    storyName: 'Basic',
    storyPath: 'preset-echarts|EchartsBasicRadarPlugin',
  },
  {
    renderStory: () => (
      <SuperChart
        chartType="echarts-basic-radar"
        width={600}
        height={600}
        queryData={{ data: formData.data }}
        formData={{ ...formData.form_data, y_axis_bounds: object('yAxisBounds', [null, 150]) }}
      />
    ),
    storyName: 'YAxisBounds',
    storyPath: 'preset-echarts|EchartsBasicRadarPlugin',
  },
];

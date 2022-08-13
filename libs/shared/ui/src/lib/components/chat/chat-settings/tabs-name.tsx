import { Controller } from 'react-hook-form';
import Color from '../../forms/color/color';
import FontSelect from '../../forms/font-select/font-select';
import Select from '../../forms/select/select';
import Slider from '../../forms/slider/slider';

export interface TabsGeneralProps {
  control: any;
}

function TabsName(props: TabsGeneralProps) {
  const { control } = props;

  return (
    <div>
      <Controller
        name="name_font"
        control={control}
        defaultValue="Roboto"
        render={({ field: { onChange } }) => (
          <FontSelect
            label="Font (with Google Fonts)"
            className="mb-3"
            onChange={(value) => onChange(value?.value)}
          />
        )}
      />
      <Controller
        name="name_text_align"
        control={control}
        defaultValue="left"
        render={({ field: { onChange } }) => (
          <Select
            label="Text align"
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
            className="mb-3"
            onChange={(value) => onChange(value?.value)}
            defaultValue={{ label: 'Left', value: 'left' }}
          />
        )}
      />
      <h3 className="text-xl font-semibold font-title  mb-3">Colors</h3>
      <Controller
        name="name_text_color"
        control={control}
        defaultValue="#000000"
        render={({ field: { onChange } }) => (
          <Color label="Text color" onColorChange={onChange} className="mb-3" />
        )}
      />
      <Controller
        name="name_background_color"
        control={control}
        defaultValue="#000000"
        render={({ field: { onChange } }) => (
          <Color
            label="Background color"
            onColorChange={onChange}
            className="mb-3"
          />
        )}
      />
      <Controller
        name="name_border_color"
        control={control}
        defaultValue="#000000"
        render={({ field: { onChange } }) => (
          <Color
            label="Border color"
            onColorChange={onChange}
            className="mb-3"
          />
        )}
      />
      <h3 className="text-xl font-semibold font-title  mb-3">Spacing</h3>
      <Controller
        name="name_border_width"
        control={control}
        defaultValue={0}
        render={({ field: { onChange } }) => (
          <Slider
            label="Border width"
            max={20}
            min={0}
            className="mb-6"
            onChange={(value) => onChange(value[0])}
          />
        )}
      />
      <Controller
        name="name_padding"
        control={control}
        defaultValue={0}
        render={({ field: { onChange } }) => (
          <Slider
            label="Inside spacing"
            max={100}
            min={0}
            className="mb-6"
            onChange={(value) => onChange(value[0])}
          />
        )}
      />
    </div>
  );
}

export default TabsName;

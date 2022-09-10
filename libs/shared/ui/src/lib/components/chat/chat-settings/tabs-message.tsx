import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import Accordion from '../../accordion/accordion';
import AccordionItem from '../../accordion/accordion-item';
import Color from '../../forms/color/color';
import FontSelect, { fontVariants } from '../../forms/font-select/font-select';
import Select from '../../forms/select/select';
import Slider from '../../forms/slider/slider';
import Spacing from '../../forms/spacing/spacing';
import Switch from '../../forms/switch/switch';
import TextAlign from '../../forms/text-align/text-align';

export interface TabsGeneralProps {
  control: Control;
}

function TabsMessage(props: TabsGeneralProps) {
  const { control } = props;
  const [fontVariants, setFontVariants] = useState<fontVariants[]>([
    { label: 'Thin', value: '100' },
    { label: 'Light', value: '300' },
    { label: 'Regular', value: 'regular' },
    { label: 'Medium', value: '500' },
    { label: 'Bold', value: '700' },
    { label: 'Black', value: '900' },
  ]);

  return (
    <div>
      <Accordion>
        <AccordionItem title="Global settings">
          <Controller
            name="message.fullWidth"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <Switch label="Full width" onChange={onChange} checked={value} />
            )}
          />
        </AccordionItem>
        <AccordionItem title="Font settings">
          <Controller
            name="message.fontFamily"
            control={control}
            defaultValue="Roboto"
            render={({ field: { onChange, value } }) => (
              <FontSelect
                label="Font (with Google Fonts)"
                className="mb-3"
                onChange={(fontName, variants) => {
                  setFontVariants(variants);
                  onChange(fontName);
                }}
                defaultValue={{ value: value, label: value }}
              />
            )}
          />
          <Controller
            name="message.fontWeight"
            control={control}
            defaultValue="regular"
            render={({ field: { onChange, value } }) => (
              <Select
                label="Font weight"
                options={fontVariants.map(({ label, value }) => {
                  return {
                    label: label[0].toUpperCase() + label.substring(1),
                    value: value,
                  };
                })}
                onChange={(value) => onChange(value?.value)}
                defaultValue={{
                  label: value[0].toUpperCase() + value.substring(1),
                  value: value,
                }}
                className="mb-3"
              />
            )}
          />
          <Controller
            name="message.fontSize"
            control={control}
            defaultValue="16"
            render={({ field: { onChange, value } }) => (
              <Slider
                min={10}
                max={50}
                value={[value]}
                onChange={(value) => onChange(value[0])}
                className="mb-4"
                label="Font size"
              />
            )}
          />
          <Controller
            name="message.textAlign"
            control={control}
            defaultValue="left"
            render={({ field: { onChange, value } }) => (
              <TextAlign
                onValueChange={onChange}
                label="Text align"
                value={value}
              />
            )}
          />
        </AccordionItem>
        <AccordionItem title="Color settings">
          <Controller
            name="message.textColor"
            control={control}
            defaultValue="#000000"
            render={({ field: { onChange, value } }) => (
              <Color
                label="Text color"
                onColorChange={onChange}
                className="mb-3"
                value={value}
              />
            )}
          />
          <Controller
            name="message.backgroundColor"
            control={control}
            defaultValue="#000000"
            render={({ field: { onChange, value } }) => (
              <Color
                label="Background color"
                onColorChange={onChange}
                className="mb-3"
                value={value}
              />
            )}
          />
          <Controller
            name="message.borderColor"
            control={control}
            defaultValue="#000000"
            render={({ field: { onChange, value } }) => (
              <Color
                label="Border color"
                onColorChange={onChange}
                className="mb-3"
                value={value}
              />
            )}
          />
        </AccordionItem>
        <AccordionItem title="Spacing settings">
          <Controller
            name="message.borderWidth"
            control={control}
            defaultValue={0}
            render={({ field: { onChange, value } }) => (
              <Slider
                label="Border width"
                max={20}
                min={0}
                className="mb-6"
                onChange={(value) => onChange(value[0])}
                value={[value]}
              />
            )}
          />
          <Controller
            name="message.borderRadius"
            control={control}
            defaultValue={{ top: 0, left: 0, right: 0, bottom: 0 }}
            render={({ field: { onChange, value } }) => (
              <Spacing
                className="mb-3"
                onValueChange={onChange}
                label="Border radius"
                value={value}
                type="radius"
              />
            )}
          />
          <Controller
            name="message.padding"
            control={control}
            defaultValue={{ top: 0, left: 0, right: 0, bottom: 0 }}
            render={({ field: { onChange, value } }) => (
              <Spacing
                className="mb-3"
                onValueChange={onChange}
                label="Inner spacing"
                value={value}
              />
            )}
          />
          <Controller
            name="message.margin"
            control={control}
            defaultValue={{ top: 0, left: 0, right: 0, bottom: 0 }}
            render={({ field: { onChange, value } }) => (
              <Spacing
                onValueChange={onChange}
                label="Outer spacing"
                value={value}
              />
            )}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default TabsMessage;

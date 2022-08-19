import { Control, Controller } from 'react-hook-form';
import Accordion from '../../accordion/accordion';
import AccordionItem from '../../accordion/accordion-item';
import Color from '../../forms/color/color';
import FontSelect from '../../forms/font-select/font-select';
import Slider from '../../forms/slider/slider';
import Spacing from '../../forms/spacing/spacing';
import TextAlign from '../../forms/text-align/text-align';

export interface TabsGeneralProps {
  control: Control;
}

function TabsMessage(props: TabsGeneralProps) {
  const { control } = props;

  return (
    <div>
      <Accordion>
        <AccordionItem title="Font settings">
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
              <TextAlign onValueChange={onChange} label="Text align" />
            )}
          />
        </AccordionItem>
        <AccordionItem title="Color settings">
          <Controller
            name="name_text_color"
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
            name="name_background_color"
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
            name="name_border_color"
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
            name="name_border_width"
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
            name="name_padding"
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
            name="name_margin"
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

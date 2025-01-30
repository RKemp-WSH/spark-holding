import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { Button } from "@westshorehome/spark"; 
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@westshorehome/spark'; 

describe("Spark Components", () => {

  describe("Button", () => {
    it("renders slot content", () => {
      const wrapper = mount(Button, {
        slots: {
          default: "Click Me",
        },
      });

      expect(wrapper.text()).toContain("Click Me");
    });

    it("applies variant classes", () => {
      const wrapper = mount(Button, {
        props: {
          variant: "secondary",
        },
      });

      expect(wrapper.classes()).toContain("bg-wsh-gray-200");
    });
  });

  describe("Accordion", () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = mount({
        components: {
          Accordion,
          AccordionItem,
          AccordionTrigger,
          AccordionContent,
        },
        template: `
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Item 1</AccordionTrigger>
              <AccordionContent>Content 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Item 2</AccordionTrigger>
              <AccordionContent>Content 2</AccordionContent>
            </AccordionItem>
          </Accordion>
        `,
      });
    });

    it("renders with multiple items", () => {
      expect(wrapper.findAllComponents(AccordionItem).length).toBe(2);
    });

    it("toggles item on trigger click", async () => {
      const trigger = wrapper.findComponent(AccordionTrigger);
      await trigger.trigger("click");

      const content = wrapper.findComponent(AccordionContent);
      expect(content.isVisible()).toBe(true); 

      await trigger.trigger("click"); // Click again to close
      expect(content.isVisible()).toBe(false);
    });
  });
});
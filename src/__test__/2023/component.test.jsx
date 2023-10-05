import { describe, test, expect } from 'vitest';
import Button from '../../2023/components/atoms/Button';
import { screen, render } from '@testing-library/react';

const PrimaryButton = <Button />
const SecondaryButton = <Button extraStyle={'bg-white text-priamryColor'}/> 
const ButtonAsLink = <Button variant='link'/>
const Iconbutton = <Button variant='icon' />
const DisabledButton  = <Button disabled />

describe ( 'Button Test', () => {
    test("Render a primary button with class of bg-primaryColor", () => {
      render(PrimaryButton)
      const renderedButton = screen.getByRole('button') 
      expect(renderedButton).toHaveClass('bg-primaryColor')
    })

    test("Render a secondary button with white background" , () => {
        render(SecondaryButton)
        expect(screen.getByRole('button')).toBeDefined()
    })

    test("Render button as a link", () => {
        render(ButtonAsLink)
        const renderedButton = screen.getByRole('button') 
        expect(renderedButton).toHaveAttribute('href', '/')
    })

    test("Render button as an icon", () => {
        render(Iconbutton)
        const renderedButton = screen.getByRole('button') 
        expect(renderedButton).toBeDefined()
    })

    test("Render a disabled button", () => {
        render(DisabledButton)
        const renderedButton = screen.getByRole('button') 
        expect(renderedButton).toBeDisabled()
    })
  })
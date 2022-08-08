import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import App from '@/App'
import AddTask from '@/components/Todo/AddTask'
import i18n from '@/lang'
import vuetify from '@/plugins/vuetify'

describe('AddTask.vue', () => {
    it('test valid', () => {
        const c = mount(AddTask, {i18n})
        expect(c.vm.$data.valid).toBe(false)
        c.destroy()
    })

    it('test max length', () => {
        const c = mount(AddTask, {vuetify, i18n})
        c.findComponent('v-text-field').setValue('test'.repeat(1000))
        c.vm.$methods.addTask()
        expect(c.vm.$data.valid).toBe(false)
    })
})